// Armazena o índice atual de cada carrossel por classe
  const slideIndices = {
    mySlides1: 1,
    mySlides01: 1
  };

  function showSlides(slideClass) {
    const slides = document.getElementsByClassName(slideClass);
    let index = slideIndices[slideClass];

    if (index > slides.length) slideIndices[slideClass] = 1;
    if (index < 1) slideIndices[slideClass] = slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndices[slideClass] - 1].style.display = "block";
  }

  function changeSlide(slideClass, n) {
    slideIndices[slideClass] += n;
    showSlides(slideClass);
  }

  // Inicializa ambos os slides mostrando o primeiro
  showSlides('mySlides1');
  showSlides('mySlides01');