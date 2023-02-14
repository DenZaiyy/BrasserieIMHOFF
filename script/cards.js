const cards = document.querySelectorAll(".card");
let counter = 0;

cards.forEach(function (card) {
    const minBtn = card.querySelector(".beer-min");
    const maxBtn = card.querySelector(".beer-max");
    const addBtn = card.querySelector(".btn-add");
    const likeBtn = card.querySelector(".fa-heart");

    if (minBtn) {
        minBtn.addEventListener("click", function () {
            minBtn.classList.add("item-select");
            maxBtn.classList.remove("item-select");
            card.querySelector(".price").innerHTML = "2,50 €";
        });
    }
    if (maxBtn) {
        maxBtn.addEventListener("click", function () {
            maxBtn.classList.add("item-select");
            minBtn.classList.remove("item-select");
            card.querySelector(".price").innerHTML = "5,00 €";
        });
    }
    if (likeBtn) {
        likeBtn.addEventListener("click", function () {
            alert("Product added to whislist");
        });
    }
    if (addBtn) {
        addBtn.addEventListener("click", function () {
            if (localStorage.getItem("countCart")) {
                counter = localStorage.getItem("countCart");
            }
            counter++;
            cart.style = "display: block;";
            cart.innerHTML = `(${counter})`;
            localStorage.setItem("countCart", counter);
        });
    }
});
