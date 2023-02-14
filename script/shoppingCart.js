const cart = document.querySelector(".cart");
cart.innerHTML = `(${localStorage.getItem("countCart")})`;

if (localStorage.getItem("countCart")) {
    cart.style = "display: block;";
} else {
    cart.style = "display: none;";
}
