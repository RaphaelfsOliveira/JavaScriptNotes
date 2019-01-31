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
      if (this.recipes === undefined) {
        alert(`Erro: acabou o limite de uso da API!`);
      }
    } catch (error) {
      console.log(`${error}`);
      alert(error);
    }
  }
}



const APIKEY = `6823808f2827d8cda1d04cbce035dbf5`;
