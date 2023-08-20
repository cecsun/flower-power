import { fetchProducts } from "./api.js";

function compareByPrice(a, b) {
    return a.regular_price - b.regular_price; 
} 

let flowersHTML = document.querySelector(".image-container");

async function showAllProducts() {
    let products = await fetchProducts();
    // products = products.sort(compareByPrice)
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

let flowersHTMLFeatured = document.querySelector(".image-container-featured");


async function showFeaturedProducts() {
    let products = await fetchProducts();

    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        if (product.featured) {
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
            flowersHTMLFeatured.appendChild(div);

        } 
    }

}

showAllProducts();
showFeaturedProducts();

