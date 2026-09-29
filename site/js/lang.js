/* =========================================================
   Motor de idiomas (compartido por todas las páginas)
   ---------------------------------------------------------
   Lee los textos de js/i18n.js y los aplica sobre:
     data-i18n="clave"            -> contenido (acepta HTML simple)
     data-i18n-attr="alt:clave"   -> atributos
     data-i18n-list="clave"       -> <li> a partir de un array
   Arma el selector en cualquier [data-lang-switch].
   API: window.Lang.t(clave), window.Lang.onChange(fn), window.Lang.current
   ========================================================= */
(() => {
  const root = document.documentElement;
  const I18N = window.I18N;
  const LANGS = Object.keys(I18N.languages);
  const LANG_KEY = 'precission-lang';
  let lang = I18N.default;
  const listeners = [];

  const lookup = (dict, key) => key.split('.').reduce((o, k) => (o == null ? o : o[k]), dict);
  const t = (key) => {
    const value = lookup(I18N.languages[lang], key);
    if (value !== undefined) return value;
    console.warn(`[i18n] falta "${key}" en "${lang}"`);
    return lookup(I18N.languages[I18N.default], key) ?? key;
  };

  const storage = {
    get() { try { return localStorage.getItem(LANG_KEY); } catch { return null; } },
    set(v) { try { localStorage.setItem(LANG_KEY, v); } catch { /* sin almacenamiento */ } },
  };

  // ?lang=en > elección guardada del visitante > idioma por defecto (español)
  const detectLang = () => {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    const candidates = [fromUrl, storage.get()]
      .filter(Boolean).map((l) => l.toLowerCase().split('-')[0]);
    return candidates.find((l) => LANGS.includes(l)) || I18N.default;
  };

  const applyLang = (next) => {
    lang = LANGS.includes(next) ? next : I18N.default;
    const meta = I18N.languages[lang]._meta;
    root.lang = meta.htmlLang || lang;
    // Cada página indica en <body data-i18n-meta="..."> de dónde salen su título y descripción
    const metaKey = document.body.dataset.i18nMeta || 'meta';
    document.title = t(`${metaKey}.title`);
    document.querySelector('meta[name="description"]')?.setAttribute('content', t(`${metaKey}.description`));

    document.querySelectorAll('[data-i18n]').forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const [attr, key] = pair.split(':').map((s) => s.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });
    document.querySelectorAll('[data-i18n-list]').forEach((el) => {
      const items = t(el.dataset.i18nList);
      if (!Array.isArray(items)) return;
      el.replaceChildren(...items.map((text) => Object.assign(document.createElement('li'), { textContent: text })));
    });
    document.querySelectorAll('[data-lang-switch] button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    listeners.forEach((fn) => fn(lang));
  };

  // Selector: un botón por cada idioma del diccionario
  document.querySelectorAll('[data-lang-switch]').forEach((wrap) => {
    wrap.replaceChildren(...LANGS.map((code) => {
      const { label, name } = I18N.languages[code]._meta;
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'lang__btn';
      b.dataset.lang = code;
      b.textContent = label || code.toUpperCase();
      b.title = name || code;
      b.lang = code;
      b.addEventListener('click', () => { if (code !== lang) { storage.set(code); applyLang(code); } });
      return b;
    }));
  });

  applyLang(detectLang());

  window.Lang = {
    t,
    onChange: (fn) => listeners.push(fn),
    get current() { return lang; },
  };
})();
