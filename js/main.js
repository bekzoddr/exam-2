window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".loading").classList.add("loading-hidden");
});


const API_URL = "https://dummyjson.com/products"
const postWrapper = document.querySelector(".product__cards")


async function fetchData(api) {
  let data = await fetch(api)
  data
    .json()
    .then(res => createCard(res.products))
    .catch(err => console.log(err))

}
fetchData(API_URL)

function createCard(data) {
  data.forEach(({ id, price, discountPercentage, description, thumbnail }) => {
    let card = document.createElement("div")
    card.className = "col-3"
    card.innerHTML = `
    <div class="card">
              <img class="card__image" src=${thumbnail} alt="image" />
              <div class="rate">
                <div class="rating">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text"></label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text"></label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text"></label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text"></label>
                  <input
                    checked=""
                    type="radio"
                    id="star1"
                    name="rate"
                    value="1"
                  />
                  <label for="star1" title="text"></label>
                </div>
                <h2>(${discountPercentage})   отзывов</h2>
              </div>
              <div class="card-body">
                <h1 class="description">
                    ${description}                </h1>
                <h3>
                  ${price}₽<span><pre>       8 000₽</pre></span>
                </h3>
              </div>
            </div>

        `
    card.addEventListener('click', () => singleRoute(id))
    postWrapper.appendChild(card)
  })

}
function singleRoute(id) {
  window.open(`/pages/product-page.html?id=${id}`, "_self")
}
document.querySelector('.toggle-menu').addEventListener('click', function () {
  this.classList.toggle('active');
  document.getElementById('menu').classList.toggle('open');
});
