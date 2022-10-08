import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
// import toggleLoading from "./toggleLoading.js";
import { hideLoading, showLoading } from "./toggleLoading.js";

const showDrinks = async (url) => {
  // fetch drinks
  showLoading();
  const data = await fetchDrinks(url);

  // display drniks
  hideLoading();
  const section = await displayDrinks(data);
};

export default showDrinks;
