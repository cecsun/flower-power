import { fetchProducts } from "./api.js";

function compareByPrice(a, b) {
    return a.regular_price - b.regular_price; 
} 

let flowersHTML = document.querySelector(".image-container");
let flowersHTMLFeatured = document.querySelector(".image-container-featured");


async function showFeaturedProducts() {
    let products = await fetchProducts();

    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        let div = document.createElement("div");
        let image = document.createElement("img");
        let p = document.createElement("p");
        let a = document.createElement("a");
        div.className = "image-item";

        image.src = product.images[0].src;
        image.alt = product.name;

        p.innerHTML = product.regular_price + "$";
        a.href = "product-detail.html?" + new URLSearchParams({id: product.id});
        a.appendChild(image);
        div.appendChild(a);
        div.appendChild(p);

        flowersHTML.appendChild(div);


        if (product.featured) {
            let featuredDiv = div.cloneNode(true)
            flowersHTMLFeatured.appendChild(featuredDiv);
        } 
    }
}

showFeaturedProducts();

