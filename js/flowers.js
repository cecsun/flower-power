import { fetchProducts } from "./api.js";

function compareByPrice(a, b) {
    return a.regular_price - b.regular_price; 
} 

let flowersHTML = document.querySelector(".image-container");

async function flowers() {
    let products = await fetchProducts()
    products = products.sort(compareByPrice)
    console.log(products);
    for (let i = 0; i < products.length; i++) {
        let div = document.createElement("div");
        let image = document.createElement("img");
        let p = document.createElement("p");

        div.className = "image-item";

        image.src = products[i].images[0].src;
        image.alt = products[i].name;

        p.innerHTML = products[i].regular_price + "$";

        div.appendChild(image);
        div.appendChild(p);
        flowersHTML.appendChild(div);
    }
}

flowers();