import { fetchProductByID } from "./api.js";

let productDetailHTML = document.querySelector(".product-detail")
let productHeadingHTML = document.querySelector(".product-heading")
let productImageHTML = document.querySelector(".product-image")
let productDescriptionHTML = document.querySelector(".product-description")
let productPriceHTML = document.querySelector(".product-price")

const id = getIdParam();


function getIdParam() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    return id;
}


async function showProduct() {
    const product = await fetchProductByID(id);
    console.log(product);

    productImageHTML.src = product.images[0].src
    productHeadingHTML.innerHTML = product.name
    productDescriptionHTML.innerHTML = product.description   
    productPriceHTML.innerHTML = product.price + "$"
}



showProduct()
