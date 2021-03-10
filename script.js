const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.contain');
const brand = document.querySelector('.nav-bar .brand a h1');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
    let scroll_position = window.scrollY;
    if(scroll_position > 30){
        header.style.backgroundImage = 'linear-gradient(60deg, #070301 0%, #8B4513 100%)';
        brand.style.color = 'white';
    }
    else{
        header.style.backgroundImage = 'none';
        brand.style.color = '#8B4513';
    }
});

menu_item.forEach(item =>{
    item.addEventListener('click', ()=> {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});


  const slides=document.querySelector(".slider").children;
  const indicatorImages=document.querySelector(".slider-indicator").children;

   for(let i=0; i<indicatorImages.length; i++){
     indicatorImages[i].addEventListener("click",function(){
        
          for(let j=0; j<indicatorImages.length; j++){
            indicatorImages[j].classList.remove("active");
          }
           this.classList.add("active");
           const id=this.getAttribute("data-id");
          for(let j=0; j<slides.length; j++){
            slides[j].classList.remove("active");
          }

           slides[id].classList.add("active");

     })
   }