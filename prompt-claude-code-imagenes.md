# Prompt para Claude Code — Descargar fotos reales y cablearlas al mockup

Copiá y pegá el bloque de abajo en Claude Code, ejecutándolo **desde la carpeta del proyecto** (`mega/`, donde está `index.html`).

---

## PROMPT (copiar y pegar)

Trabajá en este proyecto. El archivo `index.html` es un mockup de la landing de **Maquinarias Mega** y hoy usa imágenes placeholder de `picsum.photos`. Tu tarea es reemplazarlas por **fotos reales descargadas del sitio en vivo** de la empresa, dejándolas locales en el proyecto.

### 1. Fuente
- Sitio en vivo: `https://www.maquinariasmega.com` (probá también `https://maquinariasmega.com`). Rastreá la home y las páginas de detalle de equipos del catálogo; cada equipo suele tener una imagen de galería real.
- Antes de rastrear, revisá `/robots.txt` y respetá lo que permita. Hacé las descargas con un ritmo razonable (no en paralelo masivo).
- Si en la carpeta existe un `*product-catalog*.md` o `*website-spec*.md` de una fase previa, usalo primero: ahí ya hay URLs de imágenes y nombres de equipos extraídos.

### 2. Dónde guardar
- Creá `assets/img/`.
- Nombrá los archivos en kebab-case y descriptivos (ej. `hero-mineria.jpg`, `excavadora-komatsu-pc210.jpg`).
- Optimizá cada imagen: redimensioná al ancho que realmente se usa (hero ~1600px, visual/equipos ~900px, fotos "quiénes somos" ~600px), comprimí a calidad ~80, y generá `.webp` además del `.jpg`/`.png` original. Usá las herramientas disponibles (cwebp, ImageMagick/`convert`, o `sharp` vía Node — instalá lo que falte).

### 3. Slots de imagen a reemplazar en `index.html`
Reemplazá CADA `url('https://picsum.photos/...')` por la ruta local correspondiente. Hay slots en el `<style>` (CSS) y en atributos `style="background-image:url(...)"` inline. Mapeo por significado (usá el `seed` o el `aria-label` para ubicarlos):

| Slot (seed / aria-label) | Contenido sugerido |
|---|---|
| `.hero-bg` → `mega-quarry-mining` | Foto amplia de mina/cantera o maquinaria en operación |
| `.hero-visual` → `mega-hero-machine` | Equipo protagonista (excavadora/camión) |
| `.line-card.feature` → `mega-construction-mining` | Construcción y minería |
| `.photo` → `mega-site-operation` | Operación en obra |
| `.photo` → `mega-workshop` | Taller / servicio |
| `.photo` → `mega-team-crew` | Equipo técnico Mega |
| `.equip-img` → `mega-excavator` | Excavadora Komatsu |
| `.equip-img` → `mega-crane` | Grúa articulada |
| `.equip-img` (resto) | Plataforma elevadora y montacargas |

### 4. Reglas al cablear
- **No** rompas el layout ni las proporciones (`aspect-ratio`), ni los overlays/gradientes naranjas que van **encima** de cada foto: mantené el gradiente y solo cambiá la `url(...)`.
- Conservá los `aria-label`/`role="img"` existentes; donde uses `<img>`, agregá `alt` descriptivo en español, `loading="lazy"` (excepto el hero) y `width`/`height`.
- Si una imagen no se puede descargar, dejá el placeholder actual de ESE slot y anotalo en un comentario `<!-- TODO imagen: ... -->`. No inventes rutas a archivos que no existen.

### 5. Cierre
- Hacé un único pase de verificación: que no quede ninguna referencia a `picsum.photos`, que todas las rutas locales existan en `assets/img/`, y que el HTML siga válido. Abrí/renderizá la página para confirmar que se ven.
- Al final, dame un resumen corto: qué imágenes bajaste, de qué URL, cuáles quedaron pendientes, y el peso total de `assets/img/`.

No cambies textos, colores ni estructura de secciones: esta tarea es **solo imágenes**.

---

### Notas
- Si Claude Code no logra acceder al sitio (bloqueo/robots), pedile que use las URLs del `product-catalog.md` de la fase de extracción, o que te liste los slots para que vos le pases las fotos a mano en `assets/img/`.
- Estas fotos del sitio son material del cliente — uso interno para el prototipo. Antes de publicar, confirmá derechos de las imágenes que no sean propias de Mega.
