let cart = document.querySelector('.cart')
let counter = 0

function addToCart() {
    counter++
    cart.innerHTML = " (" + counter + ")"
}