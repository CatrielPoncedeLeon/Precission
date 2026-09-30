(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;

  // Animación de entrada del hero
  requestAnimationFrame(() => document.body.classList.add('is-loaded'));

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Idiomas: motor en js/lang.js, textos en js/i18n.js ---------- */
  const { t } = window.Lang;
  const onLangChange = { push: window.Lang.onChange };

  /* ---------- Nav: estado al scrollear + menú móvil ---------- */
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const toTop = document.querySelector('.to-top');

  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', t(open ? 'a11y.closeMenu' : 'a11y.openMenu'));
    mobileMenu.hidden = !open;
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  onLangChange.push(() => setMenu(toggle.getAttribute('aria-expanded') === 'true'));
  setMenu(false);
  mobileMenu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  /* ---------- Reveal on scroll ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  // Escalonado entre hermanos
  document.querySelectorAll('.reveal').forEach((el) => {
    const siblings = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
    el.style.setProperty('--d', `${siblings.indexOf(el) * 0.08}s`);
    revealObserver.observe(el);
  });

  /* ---------- Contadores ---------- */
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      counterObserver.unobserve(el);
      if (reduceMotion) { el.textContent = target; return; }
      const start = performance.now();
      const duration = 1600;
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach((el) => counterObserver.observe(el));

  /* ---------- Carrusel de clientes ---------- */
  // Repite el grupo de logos hasta cubrir la pantalla y lo duplica: la animación recorre
  // exactamente la mitad del track, así el loop no tiene saltos.
  const logos = document.querySelector("[data-logos]");
  if (logos && !reduceMotion) {
    const track = logos.querySelector(".logos__track");
    const group = track.querySelector(".logos__group");
    const buildLogos = () => {
      track.querySelectorAll(".logos__group:not(:first-child)").forEach((g) => g.remove());
      const perHalf = Math.max(1, Math.ceil(window.innerWidth / group.offsetWidth));
      for (let i = 1; i < perHalf * 2; i++) {
        const clone = group.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        clone.querySelectorAll("img").forEach((img) => { img.alt = ""; img.removeAttribute("data-i18n-attr"); });
        track.appendChild(clone);
      }
      // Velocidad constante (~60 px/s) sin importar cuántos logos haya
      track.style.setProperty("--duration", `${(group.offsetWidth * perHalf) / 60}s`);
    };
    buildLogos();
    let lastWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;
      buildLogos();
    });
  }

  /* ---------- Spotlight en tarjetas de servicios ---------- */
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  /* ---------- Manifiesto: palabras que se encienden ---------- */
  // El texto sale del diccionario; las palabras entre *asteriscos* se destacan
  const manifesto = document.querySelector('[data-words]');
  let words = [];
  const buildManifesto = () => {
    manifesto.replaceChildren();
    String(t(manifesto.dataset.words)).trim().split(/\s+/).forEach((raw, i) => {
      const accent = /^\*.+\*$/.test(raw);
      const span = document.createElement('span');
      span.className = accent ? 'w accent' : 'w';
      span.textContent = accent ? raw.slice(1, -1) : raw;
      if (i) manifesto.append(' ');
      manifesto.append(span);
    });
    words = [...manifesto.querySelectorAll('.w')];
  };
  buildManifesto();

  /* ---------- Links activos en el nav ---------- */
  const navLinks = [...document.querySelectorAll('.nav__links a[href^="#"]:not(.btn)')];
  const sections = navLinks.map((a) => document.querySelector(a.getAttribute('href')));

  /* ---------- Loop de scroll ---------- */
  const steps = document.querySelector('.steps');
  const stepItems = [...document.querySelectorAll('.step')];

  let ticking = false;
  const onScroll = () => {
    const y = window.scrollY;
    const vh = window.innerHeight;

    nav.classList.toggle('is-scrolled', y > 20);
    toTop.classList.toggle('is-visible', y > vh);

    // Manifiesto
    const mr = manifesto.getBoundingClientRect();
    const mp = Math.min(Math.max((vh * 0.85 - mr.top) / (mr.height + vh * 0.35), 0), 1);
    const lit = Math.round(mp * words.length);
    words.forEach((w, i) => w.classList.toggle('on', reduceMotion || i < lit));

    // Línea de pasos
    if (steps) {
      const sr = steps.getBoundingClientRect();
      const sp = Math.min(Math.max((vh * 0.8 - sr.top) / (vh * 0.5), 0), 1);
      steps.style.setProperty('--fill', sp.toFixed(3));
      stepItems.forEach((s, i) => s.classList.toggle('is-active', sp >= (i + 0.5) / stepItems.length || sp === 1));
    }

    // Link activo
    let current = -1;
    sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top < vh * 0.4) current = i; });
    navLinks.forEach((a, i) => a.classList.toggle('is-active', i === current));

    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener('resize', onScroll);
  onLangChange.push(() => { buildManifesto(); onScroll(); });
  onScroll();

  /* ---------- Parallax del hero con el mouse ---------- */
  const heroMark = document.querySelector('.hero-mark');
  const blobs = document.querySelectorAll('.hero .blob');
  if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    document.querySelector('.hero').addEventListener('pointermove', (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      heroMark.style.transform = `translate(${x * 18}px, ${y * 18}px) rotate(${x * 6}deg)`;
      blobs.forEach((b, i) => { b.style.translate = `${x * (i ? -30 : 30)}px ${y * (i ? -30 : 30)}px`; });
    });
  }

  /* ---------- Click en el logo: repetir la animación del isotipo ---------- */
  // Las flechas vuelven a su posición inicial y se reconectan cuando el scroll llega al hero.
  if (!reduceMotion) {
    let replayId = 0;
    document.querySelectorAll('a.brand[href="#inicio"]').forEach((link) => {
      link.addEventListener('click', () => {
        const id = ++replayId;
        heroMark.classList.add('is-reset');
        const started = performance.now();
        const waitForHero = () => {
          if (id !== replayId) return; // hubo otro click: manda el último
          const arrived = window.scrollY < window.innerHeight * 0.25;
          if (!arrived && performance.now() - started < 2000) return requestAnimationFrame(waitForHero);
          heroMark.getBoundingClientRect(); // fuerza a aplicar el estado inicial antes de animar
          heroMark.classList.remove('is-reset');
        };
        requestAnimationFrame(() => requestAnimationFrame(waitForHero));
      });
    });
  }

  /* ---------- WhatsApp: mensaje precargado según el idioma ---------- */
  // El número sale del href del HTML (https://wa.me/<número>); el texto, del diccionario.
  const whatsappLinks = [...document.querySelectorAll('[data-whatsapp]')];
  const setWhatsApp = () => whatsappLinks.forEach((a) => {
    a.href = `${a.href.split('?')[0]}?text=${encodeURIComponent(t('whatsapp.message'))}`;
  });
  setWhatsApp();
  onLangChange.push(setWhatsApp);

  /* ---------- Formulario de contacto (solo front) ---------- */
  const form = document.getElementById('contactForm');
  const success = form.querySelector('.form__success');
  const submitBtn = form.querySelector('button[type="submit"]');
  const submitLabel = submitBtn.querySelector('.btn__label');
  const fields = [...form.querySelectorAll('input, textarea')];

  const validate = (field) => {
    const ok = field.checkValidity() && (field.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim()));
    field.closest('.field').classList.toggle('is-invalid', !ok);
    return ok;
  };
  fields.forEach((f) => {
    f.addEventListener('blur', () => { if (f.value) validate(f); });
    f.addEventListener('input', () => { if (f.closest('.field').classList.contains('is-invalid')) validate(f); });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const results = fields.map(validate);
    if (results.includes(false)) {
      fields[results.indexOf(false)].focus();
      return;
    }

    const data = Object.fromEntries(new FormData(form));
    // TODO: conectar con el backend / servicio de envío cuando esté disponible.
    console.info('[contacto] datos listos para enviar:', data);

    submitBtn.classList.add('is-loading');
    submitLabel.textContent = t('contact.sending');
    setTimeout(() => {
      submitBtn.classList.remove('is-loading');
      submitLabel.textContent = t('contact.submit');
      success.hidden = false;
      form.reset();
    }, 900);
  });

  form.querySelector('[data-reset]').addEventListener('click', () => {
    success.hidden = true;
    fields[0].focus();
  });
})();
