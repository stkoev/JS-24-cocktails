import { hideLoading } from "./toggleLoading.js";
import get from "./getElement.js";

function displayDrink(data) {
  hideLoading();
  const drinkDOM = get(".single-drink");
  const {
    idDrink: id,
    strDrink: name,
    strDrinkThumb: image,
    strInstructions: desc,
  } = data.drinks[0];
  const list = [
    data.drinks[0].strIngredient1,
    data.drinks[0].strIngredient2,
    data.drinks[0].strIngredient3,
    data.drinks[0].strIngredient4,
    data.drinks[0].strIngredient5,
    data.drinks[0].strIngredient6,
    data.drinks[0].strIngredient7,
    data.drinks[0].strIngredient8,
    data.drinks[0].strIngredient9,
  ];
  const ingredients = list
    .map((ing) => {
      if (!ing) return;
      return `<li><i class="far fa-check-square"></i>${ing}</li>`;
    })
    .join("");
  document.title = name;
  const element = `
    <img src="${image}" alt="${name}" class="drink-img" />
    <article class="drink-info">
    <h2 class="drink-name">${name}</h2>
    <p class="drink-desc">${desc}</p>
    <ul class="drink-ingredients">${ingredients}</ul>
    <a href="./index.html" class="btn">all cocktails</a>
        `;
  drinkDOM.innerHTML = element;
}

export default displayDrink;
