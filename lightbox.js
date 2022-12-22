window.onload = () => {
    const img = document.querySelector('.lightbox img');
    const lightbox = document.querySelector('.lightbox');
    const close = document.querySelector('.close');
    const portafolio = document.querySelector('#portafolio');
    function onCartClick(event) {
    const {target} = event;
    const {src} = target; 
    img.src = target.src;
    console.log(target.src);
    lightbox.classList.add('active');
    }
    portafolio.addEventListener('click',onCartClick,true);
    
    close.addEventListener("click",function(){
        lightbox.classList.remove('active');
        img.src.remove(target.src);

     });
    
}