// The base URL for the API
const all = "http://localhost/flower-power/wp-json/wc/store/products";

// A helper function to fetch data from the API
async function fetchData(url) {
    const payload = await fetch(url);
    const data = await payload.json();
    return data;
}

// Fetches all data from the API
async function fetchProducts() {
    const data = await fetchData(all);
    return data;
}

// Fetches data from the API by ID
async function fetchProductByID(id) {
    const data = await fetchData(all + "/" + id);
    return data;
}

function compareByPrice(a, b) {
    return a.prices.price - b.prices.price; 
} 

async function test() {
    let products = await fetchProducts()
    products = products.sort(compareByPrice)
    console.log(products)
}

test();