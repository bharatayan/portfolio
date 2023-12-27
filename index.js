

// let sidenavbar = document.querySelector('.sidenavbar');

// document.querySelector('#menu-btn').onclick = () =>{
//     sidenavbar.classList.toggle('active');
//     document.body.classList.toggle('active');
// }
// document.querySelector('#x').onclick = () =>{
//     sidenavbar.classList.remove('active');
// }

// window.onscroll = () =>{
//     if(window.innerWidth < 991){
//        sidenavbar.classList.remove('active');
//        document.body.classList.remove('active');
//     }
//  }

let menu = document.querySelector('#menu-btn');
let night = document.querySelector('.bi-moon-fill');
let sidenavbar = document.querySelector('.sidenavbar');

menu.onclick = () => {
   menu.classList.toggle('bi-x-lg');
   sidenavbar.classList.toggle('active');
   document.body.classList.toggle('active');
}

document.querySelector('main').onclick = () =>{
   sidenavbar.classList.remove('active');
   menu.classList.remove('bi-x-lg');
   document.body.classList.remove('active');
}

window.onscroll = () => {
   if (window.innerWidth < 991) {
      menu.classList.remove('bi-x-lg');
      sidenavbar.classList.remove('active');
      document.body.classList.remove('active');
   }
 }
 night.onclick = () =>{
   night.classList.toggle('bi-moon-stars');
   if(night.classList.contains('bi-moon-stars')){
   document.body.classList.add('dark');
   }else{
   document.body.classList.remove('dark');
   }
 }










var typed = new Typed('.type', {
   // Waits 1000ms after typing "First"
   strings: ['Angular Developer', 'Frontent Developer'],
   loop: true,
   typeSpeed: 120,
});