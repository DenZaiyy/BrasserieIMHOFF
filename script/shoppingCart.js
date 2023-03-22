const cart = document.querySelector(".cart");
cart.innerHTML = `(${localStorage.getItem("countCart")})`;

window.addEventListener("load", function () {
    const cartBtn = document.querySelector(".cart-btn");
    const cartOverlay = document.querySelector(".cart-overlay");
    const cartContainer = document.querySelector(".cart-container");
    const closeBtn = document.querySelector(".close-btn");

    cartBtn.addEventListener("click", function () {
        cartOverlay.classList.add("open-cart");
        cartContainer.classList.add("slide-container");
    });

    closeBtn.addEventListener("click", function () {
        cartOverlay.classList.remove("open-cart");
        cartContainer.classList.remove("slide-container");
    });
});

if (localStorage.getItem("countCart")) {
    cart.style = "display: block;";
} else {
    cart.style = "display: none;";
}
