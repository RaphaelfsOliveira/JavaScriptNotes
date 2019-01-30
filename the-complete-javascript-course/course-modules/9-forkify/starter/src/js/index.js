import axios from 'axios';

const APIKEY = `60241fc7b6065228e497db8ce46ef95c`;
const URL = `https://www.food2fork.com/api/search`;

async function getRecipesResults(query) {
  try {
    const getRecipes = await axios(`${URL}?key=${APIKEY}&q=${query}`);
    const recipes = getRecipes.data.recipes;
    console.log(recipes);
  } catch (error) {
    console.log(`${error}`);
  }

}
getRecipesResults('pizza');
// Jalapeno
