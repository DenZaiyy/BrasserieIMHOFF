const beerList = [
    {
        id: 0,
        name: "La Poisse - White beer",
        img: "assets/img/biere-blanche.png",
        alt: "image of our white beer",
        title_desc: "Summer White Beer:",
        desc: "Greedy by a caramelised malt and refreshing by the acidity of the red fruit notes. Don’t wait the good days for drink a good refresh white beer, let’s try our White POISSE A tasty caramelised but refreshing beer due to the acidity of the red fruit notes. Don’t wait until the sunny days are here to drink a good refreshing white beer. Let’s try now our White POISSE",
        price: "2,50 €",
        inStock: true,
    },
    {
        id: 1,
        name: "La Poisse - Lager beer",
        img: "assets/img/biere-blonde.png",
        alt: "image of our lager beer",
        title_desc: "Lager Beer :",
        desc: "With citrus notes that tickle your noses, bitterness will surprise your taste buds and while some light bubbles will be caressing your palate. Our Blonde POISSE would be refresh for your best gustatory will refresh you and offer gustatory pleasure.",
        price: "2,50 €",
        inStock: true,
    },
    {
        id: 2,
        name: "La Poisse - I.P.A beer",
        img: "assets/img/biere-ipa.png",
        alt: "image of our ipa beer",
        title_desc: "IPA BEER (indian pale ale):",
        desc: "Strongest beer by HOP, brewed with specific citrus hop, A beautiful bitterness in start of tasting followed by a delicious floral taste. And a bumpy happy ending.",
        price: "2,50 €",
        inStock: false,
    },
    {
        id: 3,
        name: "La Poisse - Brown Beer",
        img: "assets/img/biere-brune.png",
        alt: "image of our brown beer",
        title_desc: "Brown beer :",
        desc: "It’s roasted malt brings slight bitterness and some floral notes.",
        price: "2,50 €",
        inStock: false,
    },
    {
        id: 4,
        name: "La Poisse - Autumn Beer",
        img: "assets/img/biere-automne.png",
        alt: "image of our autumn beer",
        title_desc: "Autumn beer :",
        desc: "Ginger beer, a beer with temperament, ideal for conviviality of the first autumn garden days. The dream beer to warm up by the fire.",
        price: "2,50 €",
        inStock: true,
    },
    {
        id: 5,
        name: "La Poisse - Summer White Beer",
        img: "assets/img/biere-ete.png",
        alt: "image of our summer white beer",
        title_desc: "Summer white Beer :",
        desc: "A tasty caramelised but refreshing beer due to the acidity of the red fruit notes. Don’t wait until the sunny days are here to drink a good refreshing white beer. Let’s try now our White POISSE",
        price: "2,50 €",
        inStock: false,
    },
    {
        id: 6,
        name: "La Poisse - Christmas beer",
        img: "assets/img/biere-noel.png",
        alt: "image of our merry christmas beer",
        title_desc: "Merry Christmas BEER :",
        desc: "One beautiful amber robe, with a gentle approach, a subtill mix of Christmas spices and a light bitterness note in mouth.",
        price: "2,50 €",
        inStock: true,
    },
    {
        id: 7,
        name: "La Poisse - Spring beer",
        img: "assets/img/biere-printemps.png",
        alt: "image of our spring beer",
        title_desc: "Spring break beer :",
        desc: "Blondie floral beer with a golden colour. Light in mouth, hydrating beer and ideal on the first sunny days of the year. the first good days of the years.",
        price: "2,50 €",
        inStock: false,
    },
]

const beerEl = document.getElementById("beer-items");

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

        cardDOM += `
    <div class="card">
        <div>
            <figure>
                <div class="desc-content">
                    <img src="${arr[i].img}" alt="${arr[i].alt}" />
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

    beerEl.innerHTML = cardDOM
}

function managePrice(arr) {
    for (let i = 0; i < arr.length; i++) {
        let price = document.getElementById(`price-${arr[i].id}`);
        let selectPriceMin = document.getElementById(`beer-min-${arr[i].id}`);
        let selectPriceMax = document.getElementById(`beer-max-${arr[i].id}`);

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
}
generateCard(beerList)
managePrice(beerList)