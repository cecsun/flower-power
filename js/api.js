function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

const key = "ck_f3ce2fc2a0b42da43ffd4719f945845c4fd1820c";
const secret = "cs_ff291bb9bc139e00aa710a395bb5c74377fd51d6";

// The base URL for the API
const all = 'http://localhost/flower-power/wp-json/wc/v3/products';

// OAuth 1 credentials
const consumerKey = key;
const consumerSecret = secret;

// API endpoint
const httpMethod = 'GET'
const url = all;


// A helper function to fetch data from the API
async function fetchData(url) {
    const parameters = {
      oauth_consumer_key : consumerKey,
      oauth_nonce : generateRandomString(32),
      oauth_timestamp : Date.now().toString().substring(0, 10),
      oauth_signature_method : 'HMAC-SHA1',
    }

    // generates a RFC 3986 encoded, BASE64 encoded HMAC-SHA1 hash
    const encodedSignature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret)
    // generates a BASE64 encode HMAC-SHA1 hash. Not supported by woocommerce
    // const signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret,
    // 	{ encodeSignature: false});

    parameters.oauth_signature = encodedSignature
    const options = {
      method: httpMethod,
    };
    const payload = await fetch(url + "?" + new URLSearchParams(parameters), options);
    const data = await payload.json();
    console.log(data)
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