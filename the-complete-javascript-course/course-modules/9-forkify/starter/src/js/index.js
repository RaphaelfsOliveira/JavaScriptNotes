import Search from './models/Search';


const search = new Search('pizza');
console.log(search);

const recipes = search.getRecipesResults();
recipes.then(response => {
  console.log(response);
})
