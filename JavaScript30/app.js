const menuButton = document.querySelector('.menu-button')
const productMenu = document.querySelector('.product-dropdown')
const closeBtn = document.querySelector('.close')
const productBtn = document.querySelector('.product-desktop')
const heroBtn = document.querySelectorAll('.hero-container')

  menuButton.addEventListener('click', ()=>{
    productMenu.classList.remove("hidden");
})

closeBtn.addEventListener('click', ()=>{
    productMenu.classList.toggle("hidden");
})


productBtn.addEventListener('mouseover', ()=>{
    productMenu.classList.remove("hidden");

  
})
heroBtn.forEach(function(item) {
  item.addEventListener('click', function() {
   productMenu.classList.toggle("hidden");
  });
   });
//   

//      document.body.addEventListener('click', ()=>{
//     productMenu.classList.remove("hidden");})
//     // document.body.removeEventListener('click', ()=>{
//     // productMenu.classList.toggle("hidden")})
//     // productMenu.classList.remove("hidden");
  
// }

