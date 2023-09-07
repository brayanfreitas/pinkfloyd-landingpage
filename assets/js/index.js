const links = document.querySelectorAll('.nav-list li a');

    // Adiciona eventos de mouseover e mouseout aos links
    links.forEach((link) => {
      link.addEventListener('mouseover', () => {
        link.classList.add('color-change'); // Adiciona a classe para iniciar a animação
      });

      link.addEventListener('mouseout', () => {
        link.classList.remove('color-change'); // Remove a classe para parar a animação
      });
    });