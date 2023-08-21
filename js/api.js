const key = "ck_f3ce2fc2a0b42da43ffd4719f945845c4fd1820c";
const secret = "cs_ff291bb9bc139e00aa710a395bb5c74377fd51d6";

// The base URL for the API
const all = 'https://localhost/flower-power/wp-json/wc/v3/products';

// OAuth 1 credentials
const consumerKey = key;
const consumerSecret = secret;

// API endpoint
const httpMethod = 'GET'

async function fetchData(url) {
    const parameters = {
        consumer_key: consumerKey,
        consumer_secret: consumerSecret
    };

    const options = {
        method: httpMethod,
    };

    const payload = await fetch(url + "?" + new URLSearchParams(parameters), options)
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