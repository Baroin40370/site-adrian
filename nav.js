const navSlide = () => {
    const query = document.querySelector('.query');
    const nav = document.querySelector('.nav-links');
    const navLink = document.querySelectorAll('.nav-links li');
    const border = document.querySelector('.border');
    let createEvents = true;
    const toggle = ()=>{      
      border.classList.toggle('active');  
      nav.classList.toggle('active');
      query.classList.toggle('toggle');      
      navLink.forEach((link, index)=>{
        if (link.style.animation) {
          link.style.animation ='';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`
        }
        if (createEvents) {
          if (link.className !== "menu") {
            link.addEventListener('click',toggle);
          }          
        }        
      });      
      createEvents = false;
    }
    query.addEventListener('click',toggle);  
}
navSlide();