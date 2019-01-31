import axios from 'axios';
// End of imports

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getRecipesResults() {
    const APIKEY = `60241fc7b6065228e497db8ce46ef95c`;
    const URL = `https://www.food2fork.com/api/search`;
    try {
      const getRecipes = await axios(`${URL}?key=${APIKEY}&q=${this.query}`);
      this.recipes = getRecipes.data.recipes;
    } catch (error) {
      console.log(`${error}`);
      alert(error);
    }
  }
}
