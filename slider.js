let slide = new Array("asset/Capture1.PNG","asset/Capture2.PNG", "asset/Capture3.PNG", "asset/Capture4.PNG", "asset/Capture5.PNG");
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
};