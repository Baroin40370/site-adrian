window.onload = () => {
   const img = document.querySelector('.contenu img');
   const lightbox = document.querySelector('.lightbox');
   const close = document.querySelector('.close');
   const next = document.querySelector('.next');
   const previous = document.querySelector('.prev');
   const closeLightbox = ()=>{
      lightbox.classList.remove('active');    
   }
   close.addEventListener("click",closeLightbox);
   const links = Array.from(document.querySelectorAll('#portafolio img'))

   let index = 0;
   const setImage = ()=>{
      img.src = links[index].src
      img.alt = links[index].alt
   }
   const nextImage = ()=>{
      index++;
      if (index === links.length) {
         index = 0;
      }      
      setImage();
   }
   const previousImage = ()=>{
      index--;
      if (index < 0) {
         index = links.length-1;
      }
      setImage();
   }
   const onClick = (event)=>{
      lightbox.classList.add('active');
      index = links.findIndex(find);
      function find (value){
         return value === event.currentTarget
      } 
      setImage();
   }
   links.forEach(link => link.addEventListener('click',onClick));
   next.addEventListener('click',nextImage);
   previous.addEventListener('click',previousImage);
}