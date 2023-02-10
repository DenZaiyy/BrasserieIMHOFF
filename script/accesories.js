const accesoriesList = [
    {
        id: 8,
        name: "La Poisse - Coasters",
        img: "assets/img/product-9.png",
        alt: "image of our coaster",
        title_desc: "Coasters :",
        desc: "With the LA POISSE logo in the middle, practical for placing your glasses, while keeping a nice design.",
        price: "5 €",
        inStock: true
    },
    {
        id: 9,
        name: "La Poisse - Glasses",
        img: "assets/img/product-10.png",
        alt: "image of our glasses",
        title_desc: "Glasses By LA POISSE :",
        desc: "Designed by LA POISSE for LA POISSE, theses glasses are the dream for beer come in 33cl or 75cl of beer.",
        price: "5 €",
        inStock: false
    }
];

const accesoriesEl = document.getElementById("accessorie-items")

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

    accesoriesEl.innerHTML = cardDOM
}

generateCard(accesoriesList)