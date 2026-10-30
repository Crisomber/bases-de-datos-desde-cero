// =========================================================
// JavaScript global — compartido por todas las páginas
// Cárgalo al final del <body>:
//   <script src="js/global.js"></script>
// =========================================================

// ---------------------------------------------------------
// Opción: header que se oculta al bajar y reaparece al subir
//
// Cualquier elemento con el atributo data-ocultar-al-bajar la usa:
//   <header class="site-header" data-ocultar-al-bajar>
// El valor (opcional) son los píxeles mínimos de scroll para reaccionar:
//   <header class="site-header" data-ocultar-al-bajar="20">
// Mientras está oculto lleva la clase "is-hidden" (los estilos están en css/global.css).
// ---------------------------------------------------------
document.querySelectorAll("[data-ocultar-al-bajar]").forEach((header) => {
  const umbral = Number(header.dataset.ocultarAlBajar) || 6;
  let ultimoY = window.scrollY;

  function actualizar() {
    const y = window.scrollY;
    const dif = y - ultimoY;
    if (Math.abs(dif) < umbral) return;
    const bajando = dif > 0 && y > header.offsetHeight;
    // No ocultarlo mientras el teclado está dentro del header
    header.classList.toggle("is-hidden", bajando && !header.contains(document.activeElement));
    ultimoY = y;
  }

  window.addEventListener("scroll", actualizar, { passive: true });
  header.addEventListener("focusin", () => header.classList.remove("is-hidden"));
});
