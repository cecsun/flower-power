// The base URL for the API
const all = "http://localho.st/flower-power/wp-json/wc/store/products";

// A helper function to fetch data from the API
async function fetchData(url) {
    const payload = await fetch(url);
    const data = await payload.json();
    return data;
}

// Fetches all data from the API
export async function fetchProducts() {
    const data = await fetchData(all);
    return data;
}

// Fetches data from the API by ID
export async function fetchProductByID(id) {
    const data = await fetchData(all + "/" + id);
    return data;
}