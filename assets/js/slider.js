document.addEventListener('DOMContentLoaded', (event) => {

    //obetem o array com todos os slides
    let slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    
    //mostra apenas um slide na tela
    function showSlide(index) {
        slides.forEach((slide, i) => slide.style.display = i === index ? 'block' : 'none');
    }
    
    //seleciona o conteudo do próximo ou do slide anterior;
    function moveSlide(direction) {
        //obetem o módulo do indice atual, 
        //mais a direção do slide e o tamanho do vetor, calculando o indice atual
        currentIndex = (currentIndex + direction + slides.length) % slides.length;
        showSlide(currentIndex);
    }
    
    // Esconde todos os slides exceto o primeiro
    showSlide(currentIndex);
  
    // Adiciona EventListeners aos botões para para obter o click
    document.querySelectorAll('.prev').forEach(button => 
        button.addEventListener('click', () => moveSlide(-1))
    );
  
    document.querySelectorAll('.next').forEach(button => 
        button.addEventListener('click', () => moveSlide(1))
    );
  
  
  });