import get from "./getElement.js";

async function displayDrinks(data) {
  const { drinks } = data;
  const section = get(".section-center");
  const title = get(".title");
  if (!drinks) {
    // hide loading
    title.textContent = "sorry, no drinks matching your search";
    section.innerHTML = null;
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      return `
        <!-- single drnikg -->
            <a href="./drink.html">
            <article class="cocktail" data-id="${id}">
                <img src="${image}" alt="${name}" />
                <h3>${name}</h3>
            </article>
            </a>
        <!-- end of single drnikg -->`;
    })
    .join("");
  // hide loading
  title.textContent = "";
  section.innerHTML = newDrinks;
  return section;
}

export default displayDrinks;
