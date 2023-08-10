console.log('Hello World!');

const letters = ["a", "b", "c", "d", "e"];
console.log(letters);

for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
}


console.log(letters[3])

letters[3] = "f";
console.log(letters)

const u = letters[2]

letters.sort()
console.log(letters)

const pet1 = {
    name: "luna",
    age: 7,
}

const pet2 = {
    name: "lexi",
    age: 8,
}

const pet3 = {
    name: "pus",
    age: 4,
}

const pets = [pet1, pet2, pet3]
console.log(pets)

let petsSorted = []

function comparePetsAge(a, b) { 
    return a.age - b.age
}

petsSorted = pets.sort(comparePetsAge)
console.log(petsSorted)

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