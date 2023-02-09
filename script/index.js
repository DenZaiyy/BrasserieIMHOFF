let bestSalesItems = [
    {
        id: 0,
        name: "La Poisse - White beer",
        img: "assets/img/biere-blanche.png",
        title_desc: "Summer White Beer:",
        desc: "Greedy by a caramelised malt and refreshing by the acidity of the red fruit notes. Don’t wait the good days for drink a good refresh white beer, let’s try our White POISSE A tasty caramelised but refreshing beer due to the acidity of the red fruit notes. Don’t wait until the sunny days are here to drink a good refreshing white beer. Let’s try now our White POISSE",
        price: "2,50 €",
        inStock: true,
    },
    {
        id: 1,
        name: "La Poisse - Blonde beer",
        img: "assets/img/biere-blonde.png",
        title_desc: "Lager Beer :",
        desc: "With citrus notes that tickle your noses, bitterness will surprise your taste buds and while some light bubbles will be caressing your palate. Our Blonde POISSE would be refresh for your best gustatory will refresh you and offer gustatory pleasure.",
        price: "2,50 €",
        inStock: true,
    },
    {
        id: 2,
        name: "La Poisse - I.P.A beer",
        img: "assets/img/biere-ipa.png",
        title_desc: "IPA BEER (indian pale ale):",
        desc: "Strongest beer by HOP, brewed with specific citrus hop, A beautiful bitterness in start of tasting followed by a delicious floral taste. And a bumpy happy ending.",
        price: "2,50 €",
        inStock: false,
    },
];

let accesoriesList = [
    {
        id: 0,
        name: "La Poisse - Dessous de verre",
        img: "assets/img/product-9.png",
    }
];

let cards = document.getElementById("cards");

const selectedQtt = "item-select";

function generateCard(arr) {
    let cardDOM = "";
    let statut = "";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].inStock === true) {
            arr[i].inStock = "In stock";
            statut = "in-stock";
        } else {
            arr[i].inStock = "Not available";
            statut = "not-available";
        }

        // if (selectedQtt) {
        //     arr[i].price = 
        // }

        cardDOM += `
        <div class="card">
            <div>
                <figure>
                    <div class="desc-content">
                        <img src="${arr[i].img}" alt="image of product" />
                        <div class="middle">
                            <h2>${arr[i].title_desc}</h2>
                            <p class="text">${arr[i].desc}</p>
                        </div>
                    </div>
                    <figcaption>
                        <a href="#" target="_blank"><strong>${arr[i].name}</strong></a>
                        <p>
                            <button class="${selectedQtt}" id="beer-min-${arr[i].id}">33cl</button>
                            -
                            <button class="" id="beer-max-${arr[i].id}">75cl</button>
                        </p>
                    </figcaption>
                </figure>
            </div>
            <div class="like-product">
                <i class="fa-regular fa-heart fa-xl"></i>
            </div>
            <div class="inline">
                <div class="price" id="price-${arr[i].id}">${arr[i].price}</div>
                <div class="statu-stock ${statut}">${arr[i].inStock}</div>
            </div>
            <div class="btn">
                <button class="btn-add" type="button" onclick="addToCart()">Add product</button>
            </div>
        </div>
        `;
    }
    cards.innerHTML = cardDOM;
}

generateCard(bestSalesItems);

for (let i = 0; i < bestSalesItems.length; i++) {
    let price = document.getElementById(`price-${bestSalesItems[i].id}`);
    let selectPriceMin = document.getElementById(`beer-min-${bestSalesItems[i].id}`);
    let selectPriceMax = document.getElementById(`beer-max-${bestSalesItems[i].id}`);

    selectPriceMin.addEventListener("click", function () {
        price.textContent = "2,50 €";
        selectPriceMin.classList.add(selectedQtt)
        selectPriceMax.classList.remove(selectedQtt)
    })

    selectPriceMax.addEventListener("click", function () {
        selectPriceMax.classList.add(selectedQtt)
        selectPriceMin.classList.remove(selectedQtt)
        price.textContent = "5,00 €"
    })
}