let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick =() =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
   cart.classList.remove('active');
   loginform.classList.remove('active');

}
let   cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick =() =>{
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    
    loginform.classList.remove('active');
 
}
let loginform = document.querySelector('.login-form');

document.querySelector('#eye-btn').onclick =() =>{
    loginform.classList.toggle('active');
    navbar.classList.remove('active');
   searchform.classList.remove('active');
   cart.classList.remove('active');
 

}
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick =() =>{
    navbar.classList.toggle('active');
  
   searchform.classList.remove('active');
   cart.classList.remove('active');
   loginform.classList.remove('active');

}
window.onscroll =() => {
    navbar.classList.remove('active');
   searchform.classList.remove('active');
   cart.classList.remove('active');
   loginform.classList.remove('active');
}
let slides = document.querySelectorAll('.home .slides-container .slide');
let index =0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
//**


let countDate = new Date ('june 1,2021 00:00:00').getTime();

function CountDown(){

   let now =new Date().getTime();
   gap = countDate - now ;


   let second = 1000;
   let minute = second *60;
   let hour = minute *60;
   let day = hour * 24;


   let d = Math.floor(gap/(day));
   let h = Math.floor((gap % (day) )/ (hour));
   let m = Math.floor((gap % (hour)) / (minute));
   let s = Math.floor((gap % (minute))/ (second));


   document.getElementById('day').innerText =d;
   document.getElementById('hour').innerText =h;
   document.getElementById('minute').innerText =m;
   document.getElementById('second').innerText =s;
}
   setInterval(function(){
    CountDown();
   },1000);
