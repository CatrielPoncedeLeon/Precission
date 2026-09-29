// Exporta los mockups de compose.html a PNG transparentes en site/img/projects/.
// Uso: npm run mockups            -> genera los 3
//      npm run mockups -- argos   -> solo uno
//      npm run mockups -- --debug -> genera versiones con el original superpuesto (para alinear)
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');
const puppeteer = require('puppeteer-core');

const ROOT = __dirname;
const OUT = path.join(ROOT, '..', 'site', 'img', 'projects');
const OUTPUTS = { portal: 'mockup-portal-ciudadano.png', argos: 'mockup-argos.png', kine: 'mockup-kinemobile.png' };
const TYPES = { '.html': 'text/html; charset=utf-8', '.png': 'image/png', '.js': 'application/javascript' };

const args = process.argv.slice(2);
const debug = args.includes('--debug');
const only = args.filter((a) => !a.startsWith('--'));
const targets = only.length ? only : Object.keys(OUTPUTS);

const BROWSERS = [
  process.env.BROWSER_PATH,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);

function serve() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const file = path.join(ROOT, path.normalize(decodeURIComponent(req.url.split('?')[0])));
      if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
      fs.readFile(file, (err, data) => {
        if (err) { res.writeHead(404); return res.end(); }
        res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
        res.end(data);
      });
    }).listen(0, '127.0.0.1', () => resolve(server));
  });
}

// Abre el navegador con puerto de depuración y se conecta (más robusto que launch() en algunas versiones de Edge)
async function openBrowser() {
  const exe = BROWSERS.find((p) => fs.existsSync(p));
  if (!exe) throw new Error('No encontré Edge/Chrome. Definí BROWSER_PATH con la ruta al ejecutable.');
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'precission-mockups-'));
  const proc = spawn(exe, ['--headless=new', '--disable-gpu', '--no-first-run', '--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank']);
  proc.on('error', () => {});
  // Edge a veces delega en otro proceso y el que lanzamos termina enseguida,
  // así que leemos el puerto del archivo que escribe en el perfil.
  const portFile = path.join(profile, 'DevToolsActivePort');
  const wsUrl = await new Promise((resolve, reject) => {
    const started = Date.now();
    const check = () => {
      if (fs.existsSync(portFile)) {
        const [p, wsPath] = fs.readFileSync(portFile, 'utf8').trim().split(/\r?\n/);
        if (p && wsPath) return resolve(`ws://127.0.0.1:${p}${wsPath}`);
      }
      if (Date.now() - started > 20000) return reject(new Error('El navegador no respondió a tiempo.'));
      setTimeout(check, 200);
    };
    check();
  });
  const browser = await puppeteer.connect({ browserWSEndpoint: wsUrl });
  const close = async () => {
    await browser.close().catch(() => {});
    proc.kill();
    await new Promise((r) => setTimeout(r, 800));
    fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 300 });
  };
  return { browser, close };
}

(async () => {
  const server = await serve();
  const { port } = server.address();
  const { browser, close } = await openBrowser();
  try {
    const page = await browser.newPage();
    for (const name of targets) {
      if (!OUTPUTS[name]) { console.warn(`Proyecto desconocido: ${name}`); continue; }
      await page.setViewport({ width: 2000, height: 1800, deviceScaleFactor: 1 });
      await page.goto(`http://127.0.0.1:${port}/compose.html?p=${name}${debug ? '&debug=1' : ''}`, { waitUntil: 'networkidle0' });
      await page.waitForSelector('body[data-ready]');
      const stage = await page.$('#stage');
      const file = debug ? path.join(ROOT, `debug-${name}.png`) : path.join(OUT, OUTPUTS[name]);
      await stage.screenshot({ path: file, omitBackground: !debug });
      console.log('✓', path.relative(path.join(ROOT, '..'), file));
    }
  } finally {
    await close();
    server.close();
  }
})().catch((e) => { console.error(e.message); process.exit(1); });
