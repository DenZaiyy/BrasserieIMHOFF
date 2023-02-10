let cart = document.getElementById("shopping-cart");
let counter = 0;

cart.innerHTML = `(${localStorage.getItem('countCart')})`

if (localStorage.getItem('countCart')) {
    cart.style = "display: block;"
} else {
    cart.style = "display: none;"
}

function addToCart() {
    if (localStorage.getItem('countCart')) {
        counter = localStorage.getItem('countCart')
    }
    counter++;
    cart.style = "display: block";
    cart.innerHTML = ` (${counter})`;
    localStorage.setItem("countCart", counter)
}