document.addEventListener('DOMContentLoaded', () => {

  // Inicializar AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });

  // Navbar sombra al hacer scroll
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('shadow-sm');
    } else {
      navbar.classList.remove('shadow-sm');
    }
  });

  // Cierre automático del menú hamburguesa en móvil
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Solo cierra si está en móvil (el collapse está visible)
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
      }
    });
  });

  // Toggle descripción extendida (Learn More)
  document.querySelectorAll('.learn-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card');
      card.classList.toggle('expanded');
      btn.textContent = card.classList.contains('expanded') ? "Show Less" : "Learn More";
    });
  });

});