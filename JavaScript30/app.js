// const { doc } = require("prettier")

const menuButton = document.querySelector('.menu-button')
const productMenu = document.querySelector('.product-dropdown')
const closeBtn = document.querySelector('.close')
const productBtn = document.querySelector('.product-desktop')

  menuButton.addEventListener('click', ()=>{
    productMenu.classList.remove("hidden");
})

closeBtn.addEventListener('click', ()=>{
    productMenu.classList.toggle("hidden");
})

// let hasButtonBeenHovered = false;

productBtn.addEventListener('mouseover', ()=>{
    productMenu.classList.remove("hidden");
    // hasButtonBeenHovered = true;

  
})
productBtn.addEventListener('mouseleave', ()=>{
    productMenu.addEventListener("mouseover", ()=>{
        productMenu.classList.remove("hidden");

    })
    productMenu.addEventListener('mouseleave', ()=>{
        productMenu.classList.toggle("hidden");
    })

//    if (hasButtonBeenHovered === true) {
//     document.body.addEventListener('click', ()=>{
//     productMenu.classList.toggle("hidden");
//     // hasButtonBeenHovered = false;
// }); 
  
// } else {
//      document.body.addEventListener('click', ()=>{
//     productMenu.classList.remove("hidden");})
//     // document.body.removeEventListener('click', ()=>{
//     // productMenu.classList.toggle("hidden")})
//     // productMenu.classList.remove("hidden");
  
// }

})

 





// function check(){
//     productMenu.addEventListener('mouseover', ()=>{
//         productMenu.classList.remove("hidden");
//     })
// }