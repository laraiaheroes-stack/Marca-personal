# Marca-personal
Pagina para mostrar mis trabajos personales

---

# Portfolio Profesional TaskIQ

Sitio web portfolio para presentar las soluciones desarrolladas por **TaskIQ** (consultoría de tecnología inteligente para PyMEs y emprendedores en Rosario y región, Santa Fe, Argentina).

---

## 📁 Estructura del Proyecto

```text
Pagina Personal/
├── index.html        # Estructura semántica, contenidos de proyectos y contacto
├── styles.css        # Diseño responsivo, paleta verde petróleo y variables editables
├── main.js           # Desplazamiento suave, copiado seguro de email y año dinámico
├── assets/
│   ├── logo-taskiq-icon.png   # Isotipo oficial de TaskIQ
│   └── logo-taskiq-full.jpg   # Logotipo oficial completo de TaskIQ
└── README.md         # Esta guía de uso y personalización
```

---

## 🚀 Cómo Visualizar la Página

Puedes ver el sitio de dos formas muy sencillas:

### Opción 1: Directamente en tu navegador
Haz doble clic sobre el archivo `index.html` en el explorador de archivos de Windows para abrirlo en Google Chrome, Microsoft Edge o tu navegador preferido.

### Opción 2: Mediante servidor local (Recomendado para pruebas de portapapeles)
Abre PowerShell en esta carpeta y ejecuta:
```powershell
python -m http.server 3000
```
Luego ingresa en tu navegador a: `http://localhost:3000`

---

## 🖼️ Cómo Reemplazar los Espacios por Tus Capturas de Pantalla

Actualmente, cada proyecto cuenta con una tarjeta que tiene un bloque visual armónico con el título del proyecto y fondo en verde petróleo suave. Para colocar tus propias capturas:

1. **Guarda tu imagen:** Coloca el archivo de imagen (en formato `.png`, `.jpg` o `.webp`) dentro de la carpeta `assets/` (por ejemplo: `assets/agenda-screenshot.jpg`).
2. **Edita `index.html`:** Busca el bloque del proyecto que deseas actualizar. Por ejemplo, en el Proyecto 1 (AgendaIQ), busca:
   ```html
   <div class="visual-placeholder placeholder-agenda">
     ...
   </div>
   ```
3. **Reemplázalo por tu imagen:**
   ```html
   <img src="assets/agenda-screenshot.jpg" alt="Captura de pantalla de AgendaIQ" class="project-img">
   ```
   *Nota: La clase `project-img` ya tiene configurado el ajuste automático (`object-fit: cover`), bordes redondeados y un efecto sutil al pasar el cursor.*

---

## 🎨 Cómo Ajustar los Colores a la Identidad Oficial

Al inicio del archivo `styles.css` encontrarás la sección `:root` con comentarios claros:

```css
:root {
  /* Modifica estos valores con los colores oficiales de TaskIQ */
  --brand-petrol-dark: #134e57;     /* Verde petróleo principal */
  --brand-petrol-primary: #175c66;  /* Tono medio */
  --brand-teal-accent: #2ba293;     /* Acento verde agua */
  --brand-teal-light: #edf7f6;      /* Fondo suave de etiquetas */
  ...
}
```
Al cambiar estos valores hexadecimales, todo el sitio se actualizará armónicamente.

---

## 🔗 Cómo Activar la Demostración del Catálogo Digital

En `index.html`, en el Proyecto 2 (Catálogo Digital TaskIQ), encontrarás un bloque comentado dentro de `.project-actions`:

```html
<!--
  CAMPO EDITABLE PARA FUTURA DEMOSTRACIÓN:
  Cuando la demo pública esté disponible, puedes descomentar este botón:
  <a href="https://demo.tudominio.com" target="_blank" rel="noopener noreferrer" class="btn-project btn-project-outline">
    <span>Ver demo</span>
  </a>
-->
```
Solo debes quitar los comentarios `<!--` y `-->` e insertar la URL correspondiente cuando esté disponible.
