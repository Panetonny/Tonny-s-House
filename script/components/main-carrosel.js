const arrowRight = document.querySelector('.main-arrow.-right');
const arrowLeft = document.querySelector('.main-arrow.-left')
const carrosel = document.querySelector('.main-section.-sobre .main-carrosel .carrosel .items')
let cont = 0
const pixel = 400

arrowRight.addEventListener('click', function() {
    cont = cont + pixel;
    carrosel.style = `transform: translateX(${cont}px)`;
});

arrowLeft.addEventListener('click', function() {
    cont = cont - pixel;
    carrosel.style = `transform: translateX(${cont}px)`;
});

