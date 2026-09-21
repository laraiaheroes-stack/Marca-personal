/**
 * Portfolio Profesional TaskIQ
 * Scripts de interacción, navegación y copiado seguro
 */

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initCopyEmail();
  initDynamicYear();
});

/**
 * 1. Desplazamiento suave para enlaces ancla respetando la cabecera fija
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  const header = document.querySelector('.site-header');
  const headerHeight = header ? header.offsetHeight : 70;

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - (headerHeight + 16);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Actualizar URL hash limpiamente sin salto brusco
        if (history.pushState) {
          history.pushState(null, '', targetId);
        }
      }
    });
  });
}

/**
 * 2. Copiado seguro del correo electrónico con verificación de permisos reales
 * Si el navegador o el contexto no permite copiar, NO muestra confirmación falsa.
 */
function initCopyEmail() {
  const copyButtons = document.querySelectorAll('.js-copy-email');

  copyButtons.forEach(button => {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = button.getAttribute('data-email') || 'contacto@taskiqai.com';
      const textSpan = button.querySelector('.copy-text');
      const originalText = textSpan ? textSpan.textContent : 'Copiar';

      // Comprobar soporte de la API Clipboard y contexto seguro (HTTPS o localhost)
      const canUseClipboard = navigator.clipboard && 
                              typeof navigator.clipboard.writeText === 'function' &&
                              (window.isSecureContext || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

      if (!canUseClipboard) {
        // Si no se puede copiar en el portapapeles, abrimos el enlace mailto directamente
        // y NO mostramos confirmación falsa de copiado.
        window.location.href = `mailto:${email}`;
        showToast('Abriendo tu gestor de correo...', 2500);
        return;
      }

      try {
        await navigator.clipboard.writeText(email);

        // Feedback visual en el botón
        if (textSpan) {
          textSpan.textContent = '¡Copiado!';
        }
        button.classList.add('btn-copied');

        // Notificación flotante
        showToast('Correo copiado al portapapeles: ' + email, 3000);

        // Restaurar estado del botón tras 2.5 segundos
        setTimeout(() => {
          if (textSpan) {
            textSpan.textContent = originalText;
          }
          button.classList.remove('btn-copied');
        }, 2500);

      } catch (err) {
        console.warn('No se pudo acceder al portapapeles:', err);
        // En caso de fallo o denegación de permisos, derivar a mailto sin mentir
        window.location.href = `mailto:${email}`;
        showToast('Abriendo tu gestor de correo...', 2500);
      }
    });
  });
}

/**
 * Muestra un mensaje flotante (Toast)
 */
let toastTimeout = null;
function showToast(message, duration = 3000) {
  const toast = document.getElementById('toast-message');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('toast-visible');

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    toast.classList.remove('toast-visible');
  }, duration);
}

/**
 * 3. Actualización dinámica del año en el pie de página
 */
function initDynamicYear() {
  const yearElement = document.getElementById('footer-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
