# Mate y Tereré — Un sentimiento que nos une

Página web de la feria escolar sobre el mate y el tereré. Incluye una encuesta con resultados, sabores y yuyos, un glosario, los elementos y pasos para prepararlos, juegos educativos y una galería de fotos.

## Cómo ver la página

Antes de empezar necesitás tener instalado **Node.js** (versión 18 o más nueva). Para saber si lo tenés, abrí una terminal y escribí:

```
node -v
```

Si no aparece un número, descargalo de <https://nodejs.org>.

### 1) Instalar (solo la primera vez)

Abrí una terminal en esta carpeta (`mate-y-terere`) y escribí:

```
npm install
```

Esto descarga todo lo necesario y tarda unos minutos.

### 2) Ver la página en el navegador

```
npm run dev
```

Al final va a aparecer una dirección parecida a `http://localhost:5173`. Abrila en el navegador. Para terminar, cerrá la ventana de la terminal o apretá `Ctrl + C`.

## Cómo crear la versión final (para subir a internet)

```
npm run build
```

Esto crea la carpeta `dist/` con la página lista. Podés abrirla igual que en el paso 2 con:

```
npm run preview
```

## Cómo cambiar los textos y los datos

Casi todo se edita en archivos de la carpeta `src/data/`. Son archivos de texto plano que se abren con el Bloc de notas o con cualquier editor.

| Archivo | Qué contiene |
| --- | --- |
| `src/data/siteConfig.ts` | Nombre de la escuela, el grado, el año, los datos de contacto y el enlace de la encuesta. |
| `src/data/surveyData.ts` | Los resultados de la encuesta (cantidad de personas, gráficos, etc.). |
| `src/data/flavorsData.ts` | Los yuyos y sabores con sus categorías. |
| `src/data/glossaryData.ts` | Las palabras del glosario. |
| `src/data/gameData.ts` | Las tarjetas de los juegos y los pasos del mate y el tereré. |
| `src/data/galleryData.ts` | La galería: el título y la descripción de cada foto. |
| `src/assets/gallery/` | Acá van las fotos. Poner archivos llamados `foto-1.jpg`, `foto-2.jpg`, ..., `foto-6.jpg`. Si una foto no está, se muestra un cartel "Próximamente". |

### La encuesta

- Los datos que se muestran están en `src/data/surveyData.ts` y son de ejemplo: hay que reemplazarlos por los datos reales.
- El botón de la encuesta aparece deshabilitado con el texto "Encuesta próximamente".
- Para habilitarlo, completar el campo `surveyUrl` en `src/data/siteConfig.ts` con el enlace. Cuando haya un enlace, además se muestra un código QR en la sección de resultados.

## Estructura del proyecto

- `src/components/` — las secciones de la página (portada, resultados, yuyos, glosario, juegos, galería, etc.).
- `src/components/illustrations/` — los dibujos de la página (todos hechos a mano en código, sin imágenes descargadas).
- `src/styles/` — los estilos (colores, animaciones, letras).
- `index.html` — la página principal y las letras (fuentes) usadas.

## Notas para personas que programan

- Comandos útiles: `npm run dev` (ver en el navegador), `npm run build` (versión final), `npm run lint` (revisar errores de estilo de código), `npm run preview` (probar la versión final).
- Todo el texto visible está en español y se puede editar en `src/data/`.
- Los dibujos son SVG creados en el proyecto: no se necesita internet ni imágenes externas.
- Si la persona que ve la página tiene "reducir animaciones" activado en su sistema, las animaciones se muestran suaves o directas.
