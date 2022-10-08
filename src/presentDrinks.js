import fetchDrinks from "./fetchDrinks.js";

const showDrinks = async (url) => {
  console.log(url);
  // fetch drinks
  const data = await fetchDrinks(url);
  console.log(data);
  // display drniks
};

export default showDrinks;
