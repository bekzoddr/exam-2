const API_URL = "https://dummyjson.com/products"
const mainProduct = document.querySelector(".main__image")
const productName = document.querySelector(".name")
const prosuctDescription = document.querySelector(".description")
const productPrice = document.querySelector(".price")


async function fetchSingleUser(api) {
    let params = new URLSearchParams(window.location.search)
    let id = params.get("id")

    let data = await fetch(`${api}/${id}`)
    data
        .json()
        .then(res => SingleUser(res))
        .catch(err => console.log(err))
}

fetchSingleUser(API_URL)

function SingleUser({ title, price, description,  thumbnail }) {
    mainProduct.src = thumbnail
    productName.textContent = title
    prosuctDescription.textContent = description
    productPrice.textContent = price   `$`
}
window.addEventListener("load", () => {
    document.querySelector(".loading").classList.add("loading-hidden");
});

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".loading").classList.add("loading-hidden");
});