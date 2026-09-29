# Precission · Landing

Sitio estático (HTML + CSS + JS, sin build) servido con nginx.

## Desarrollo local

```bash
npm start
```

Sirve `site/` en http://localhost:8080. Guardás un cambio y recargás el navegador (F5). Para detenerlo: `Ctrl + C`.

## Levantar con Docker

```bash
docker compose up -d --build
```

Abrir http://localhost:8080

Para detenerlo: `docker compose down`

## Estructura

```
site/
  index.html        Página principal
  privacidad.html   Política de privacidad (Ley 25.326)
  css/styles.css    Estilos (paleta y tipografías de la nueva identidad)
  js/i18n.js        Diccionario de textos por idioma (ES / EN)
  js/lang.js        Motor de idiomas, compartido por todas las páginas
  js/main.js        Idiomas, animaciones de scroll, contadores, parallax y formulario
  img/              Isotipo (favicon.svg), imagen OG y mockups de proyectos
mockups/
  compose.html      Arma los mockups con dispositivos modernos
  render.js         Los exporta a site/img/projects/
  source/           PNG originales de donde se toman las pantallas
nginx.conf          Configuración del servidor
Dockerfile
docker-compose.yml
```

## Textos e idiomas

Todos los textos viven en `site/js/i18n.js`, un diccionario con un bloque por idioma.

- **Cambiar un texto:** editarlo en ese archivo (en cada idioma).
- **Agregar un idioma:** copiar el bloque `en`, cambiarle la clave (ej. `pt`), completar `_meta` y traducir.
  El selector de idioma de la barra lo muestra solo.
- **Agregar un texto nuevo al HTML:** ponerle `data-i18n="seccion.clave"` al elemento y crear esa clave en el diccionario.
  Para atributos: `data-i18n-attr="alt:seccion.clave"`. Para listas: `data-i18n-list="seccion.clave"` con un array.

Por defecto el sitio carga en español (el `default` del diccionario). Cambia solo si el visitante elige otro idioma
(la elección queda guardada) o si la URL trae `?lang=en`. Si falta una clave en un idioma se usa la del idioma por defecto
y se avisa en la consola del navegador.

Cada página indica de qué clave salen su título y descripción con `<body data-i18n-meta="...">`
(el index usa `meta`; la política, `privacy.meta`).

## Política de privacidad

`site/privacidad.html` toma sus textos de `privacy` en el diccionario. Antes de publicar conviene que la revise
alguien del área legal.

## Formulario de contacto

Por ahora es solo front: valida los campos y muestra un mensaje de éxito.
Para conectarlo a un backend, reemplazar el bloque marcado con `TODO` en `site/js/main.js`.

## Mockups de proyectos

Las imágenes `site/img/projects/mockup-*.png` se generan a partir de las pantallas de los PNG originales (`mockups/source/`),
montadas en un teléfono y una notebook modernos dibujados con CSS.

```bash
npm install          # una sola vez (instala puppeteer-core)
npm run mockups      # regenera las 3 imágenes (usa Edge o Chrome instalado)
npm run mockups -- argos           # solo una: portal | argos | kine
npm run mockups -- --debug         # superpone el original para alinear coordenadas
```

Las coordenadas de cada pantalla están en `PROJECTS`, dentro de `mockups/compose.html`.
