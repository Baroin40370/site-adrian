if (typeof slide === "undefined")
{
    slide = [];
}

let numero = 0;
let dots = document.querySelector('.dots');

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    setSlide();
};

function setSlide() {
    const actif = document.querySelector('.dot.active');
    if (actif) {
        actif.classList.remove('active');
    }
    const dot = document.querySelector('.dot[data-index="'+ numero +'"]');    
    dot.classList.add('active');
    document.getElementById("slide").src = slide[numero];
}

function onDotClick(event){
    const {target} = event;
    let index = target.getAttribute('data-index');
    numero = parseInt(index);
    setSlide();
}


function navigationDots(){    
    for (let i = 0 ; i < slide.length; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.setAttribute('data-index',i);
        dot.addEventListener('click',onDotClick);
        dots.appendChild(dot);
              
    }
} 

navigationDots()
ChangeSlide(0);


