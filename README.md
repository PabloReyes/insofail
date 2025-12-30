# Experiencias y Reclamaciones: Caso Insoex Global S.L.

Sitio web estático para documentar experiencias de consumidores y facilitar la recopilación de casos similares.

## 📁 Estructura del Proyecto

```
insoex/
├── index.html          # Página principal
├── assets/
│   ├── css/
│   │   └── styles.css  # Estilos (diseño corporativo/industrial)
│   └── js/
│       └── app.js      # Lógica de gestión de experiencias
├── robots.txt          # Configuración para crawlers
├── sitemap.xml         # Mapa del sitio para SEO
└── README.md           # Este archivo
```

## 🚀 Cómo Previsualizar

### Opción 1: Servidor local con Python (Recomendado)

```bash
# Python 3
cd /Users/reyes/projects/personal/insoex
python3 -m http.server 8080

# Luego abre en Chrome: http://localhost:8080
```

### Opción 2: Live Server (VS Code)

1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `index.html` → "Open with Live Server"

### Opción 3: Abrir directamente

Simplemente abre el archivo `index.html` en Chrome. Algunas funcionalidades pueden estar limitadas por políticas CORS.

```bash
open index.html
```

## 🔧 Características

### SEO
- ✅ Meta tags completos (description, keywords, Open Graph)
- ✅ Schema.org JSON-LD (Article, FAQPage)
- ✅ Sitemap XML
- ✅ Robots.txt
- ✅ URLs semánticas y estructura HTML5

### Funcionalidades
- ✅ Formulario para añadir experiencias
- ✅ Almacenamiento en localStorage (sin backend)
- ✅ Exportar experiencias a JSON
- ✅ Importar experiencias desde JSON
- ✅ Compartir experiencias via URL con hash Base64
- ✅ Protección XSS (sanitización de inputs)

### Diseño
- ✅ Mobile-first responsive
- ✅ Accesibilidad (WCAG): skip links, focus states, alto contraste
- ✅ Print styles
- ✅ Soporte para reduced-motion
- ✅ Diseño corporativo/industrial

## 📋 Keywords SEO Target

- Insoex Global
- Reclamación Insoex
- Toldo Estepona
- Cinta Tensora Xline
- Experiencias Insoex
- Problemas toldos Estepona

## 🔒 Aspectos Legales

El sitio incluye:
- Aviso de que es un recopilatorio de experiencias personales
- Disclaimer de no relación con Insoex Global S.L.
- Procedimiento de rectificación (mailto)
- Consentimiento antes de publicar experiencias

## 🌐 Despliegue

### GitHub Pages

1. Sube el repositorio a GitHub
2. Ve a Settings → Pages
3. Selecciona la rama `main` y carpeta `/root`
4. Actualiza `sitemap.xml` con la URL real
5. Actualiza el `canonical` en `index.html`

### Netlify

1. Conecta el repositorio
2. Build command: (vacío)
3. Publish directory: `.`
4. Actualiza las URLs en sitemap.xml e index.html

### Vercel

```bash
npx vercel
```

## 📝 Actualizar Contenido

### Añadir nueva entrada a la cronología

Edita `index.html` y añade un nuevo `<div class="timeline-item">` en la sección correspondiente.

### Modificar FAQ

Edita las etiquetas `<details class="faq-item">` en la sección FAQ. Recuerda actualizar también el JSON-LD de FAQPage.

## ⚠️ Notas Importantes

1. **Las experiencias se guardan en localStorage del navegador**. No hay backend, por lo que cada usuario ve solo sus propias experiencias añadidas + las importadas.

2. **Para compartir experiencias entre usuarios**, usa la función de exportar/importar JSON.

3. **El enlace de compartir** codifica la experiencia en Base64 en la URL. Al abrirlo, se ofrece importar esa experiencia.

## 📄 Licencia

Este proyecto es de uso personal. El código puede usarse libremente para fines similares de documentación de reclamaciones de consumidor.
