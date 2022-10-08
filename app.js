import presentDrinks from "./src/presentDrinks.js";
import "./src/searchForm.js";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=s";

const URLID = "www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552";

window.addEventListener("DOMContentLoaded", () => {
  presentDrinks(URL);
});
