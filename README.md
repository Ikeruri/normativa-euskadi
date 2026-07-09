# Normativa Educación Primaria Euskadi

Sitio estático (sin backend, sin IA) con buscador por palabras clave sobre leyes, decretos, protocolos y tutoriales de plataformas para el profesorado de Educación Primaria en Euskadi.

## Cómo funciona

- `index.html` — página única con el buscador y los filtros por categoría.
- `style.css` — estilos.
- `app.js` — carga `data/documentos.json`, indexa el contenido con [Fuse.js](https://www.fusejs.io/) (búsqueda difusa, corre en el navegador, sin coste) y pinta los resultados.
- `data/documentos.json` — la base de datos del proyecto. Cada entrada es un documento con enlace a su fuente oficial.

No hay ningún servidor, base de datos ni IA involucrados: todo el "buscador inteligente" es JavaScript corriendo en el navegador del usuario. Esto significa cero coste de hosting y cero riesgo de que se invente una ley que no existe.

## Idioma

La web arranca en euskera por defecto, con un botón EUS/ES en la cabecera para cambiar a castellano (la elección se recuerda en el navegador de cada visitante). Los textos de la interfaz (`i18n.js`) están en los dos idiomas.

Los textos de la interfaz en euskera son una primera traducción de partida — antes de publicar la web conviene que una persona euskaldun nativa los revise, sobre todo por ser una herramienta pública para el profesorado.

Si un documento todavía no tiene título en euskera (campo `titulo_eu` en `documentos.json`), la web muestra el título en castellano con la etiqueta "(gaztelaniaz)" para que quede claro que aún no está traducido — nunca se inventa ni traduce automáticamente el contenido legal.

## Cómo añadir un documento nuevo

Edita `data/documentos.json` y añade un objeto con esta forma:

```json
{
  "id": "identificador-unico",
  "titulo_es": "Título del documento",
  "titulo_eu": "Izenburua euskaraz (opcional, si lo tienes)",
  "categoria": "normativa | convivencia | gestion | tutoriales",
  "resumen": "Una o dos frases explicando de qué trata.",
  "fuente_url": "https://enlace-oficial-al-documento",
  "fuente_url_eu": "https://enlace-a-la-version-en-euskera (opcional, si es distinto)",
  "fecha": "2024-01-01",
  "tags": ["palabras", "clave", "para", "el", "buscador"]
}
```

No hace falta tocar HTML/CSS/JS para añadir contenido — solo este archivo.

**Importante sobre bilingüe:** de momento el contenido está en castellano. Para euskera, lo más fiable es copiar el texto oficial en euskera del BOPV (que publica las dos versiones en paralelo) en vez de traducir tú mismo o generarlo con IA, precisamente para no introducir errores en textos legales.

## Publicarlo gratis (elige una)

### Opción A — GitHub Pages
1. Crea un repositorio en GitHub y sube esta carpeta (`normativa-euskadi/`).
2. En el repositorio: **Settings → Pages → Source** → selecciona la rama `main` y la carpeta raíz.
3. GitHub te da una URL gratis tipo `https://tuusuario.github.io/normativa-euskadi/`. No hace falta dominio.

### Opción B — Cloudflare Pages
1. Crea cuenta gratuita en Cloudflare Pages.
2. Conecta el repositorio de GitHub (o sube la carpeta directamente con "Direct Upload").
3. Sin configuración de build (es HTML/CSS/JS puro). Te da una URL gratis tipo `https://normativa-euskadi.pages.dev/`.

### Opción C — Google Sites
Más limitado (no permite subir estos archivos tal cual, es un editor por bloques), pero si prefieres cero código puedes recrear el contenido allí usando su editor y quedarte con la URL gratuita `sites.google.com/view/...`.

Cualquiera de las tres opciones es 100% gratuita, indefinidamente, sin necesidad de comprar un dominio.

## Próximos pasos sugeridos

1. Ampliar `documentos.json` con más protocolos y normativa (organización de centro, calendario escolar, permisos, salud escolar...).
2. Revisar periódicamente el [portal de normativa educativa](https://www.euskadi.eus/informacion/normativa-educativa/web01-s2hhome/es/) para detectar cambios o nuevos decretos.
3. Si más adelante quieres añadir un asistente con IA que responda preguntas en lenguaje natural, este mismo `documentos.json` serviría como base de contenido para indexar — el trabajo de recopilación ya estaría hecho.
