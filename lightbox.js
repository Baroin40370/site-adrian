window.onload = () => {
    const portafolio = document.querySelector('#portafolio');
    portafolio.addEventListener('click',onCartClick,true);
    function onCartClick(event) {
    const {target} = event;
    const {src} = target; 
    let img = document.querySelector('#lightbox img');
    img.src = target.src;
    console.log(target.src);
    }
}