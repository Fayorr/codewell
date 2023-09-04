// const { doc } = require("prettier")

const menuButton = document.querySelector('.menu-button')
const productMenu = document.querySelector('.product-dropdown')
const closeBtn = document.querySelector('.close')

menuButton.addEventListener('click',
()=>{
    console.log("clicked")
    productMenu.classList.remove("hidden");
})

closeBtn.addEventListener('click', ()=>{
    productMenu.classList.toggle("hidden");
})