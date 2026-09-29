# Precission · Landing

Sitio estático (HTML + CSS + JS, sin build) servido con nginx.

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
  css/styles.css    Estilos (paleta y tipografías de la nueva identidad)
  js/main.js        Animaciones de scroll, contadores, parallax y formulario
  img/              Isotipo (favicon.svg), imagen OG y mockups de proyectos
nginx.conf          Configuración del servidor
Dockerfile
docker-compose.yml
```

## Formulario de contacto

Por ahora es solo front: valida los campos y muestra un mensaje de éxito.
Para conectarlo a un backend, reemplazar el bloque marcado con `TODO` en `site/js/main.js`.
