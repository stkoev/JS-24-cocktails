async function fetchDrinks(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!data) throw new Error(`Something went wrong. ${error}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchDrinks;
