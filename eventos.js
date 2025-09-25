document.addEventListener('DOMContentLoaded', function() {
  const contenedor = document.querySelector('.carrusel-contenedor');
  const imagenes = document.querySelectorAll('.carrusel-imagen');
  let indice = 0;

  function mostrarImagen(nuevoIndice) {
      contenedor.style.transform = `translateX(-${nuevoIndice * 100}%)`;
      indice = nuevoIndice;
  }

  // Mover automáticamente cada 3 segundos
  setInterval(() => {
      let siguienteIndice = indice + 1;
      if (siguienteIndice >= imagenes.length) {
          siguienteIndice = 0;
      }
      mostrarImagen(siguienteIndice);
  }, 3000); // Cambiar a la siguiente imagen cada 3 segundos
});
document.addEventListener("DOMContentLoaded", function() {
    let cards = document.querySelectorAll('.card-feature');
    
    function revealOnScroll() {
        let triggerBottom = window.innerHeight * 0.85;
        cards.forEach(card => {
            let cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
