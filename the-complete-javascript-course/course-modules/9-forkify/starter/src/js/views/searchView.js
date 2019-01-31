import { elements } from './base';
// End of imports

export const getInput = () => elements.searchInput.value;

export const clearIput = () => elements.searchInput.value = '';

export const clearResults = () => elements.searchResultList.innerHTML = '';

const limitRecipeTitle = (title, limit=17) => {
  if (title.length > limit) {

    title = title.split(' ');
    title.reduce((acc, cur, i, array) => {
      if (acc + cur.length > limit) {
        array.splice(i, array.length);
      }
      return acc + cur.length;
    }, 0);

    return `${title.join(' ')} ...`;
  }
  return title;
}

const renderRecipe = recipe => {
  const markup = `
      <li>
        <a class="results__link" href="#${recipe.recipe_id}">
          <figure class="results__fig">
            <img src="${recipe.image_url}" alt="${recipe.title}">
          </figure>
          <div class="results__data">
            <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
            <p class="results__author">${recipe.publisher}</p>
          </div>
        </a>
      </li>
  `;
  elements.searchResultList.insertAdjacentHTML('beforeend', markup);
}

export const renderResults = recipes => {
  recipes.forEach(renderRecipe);
}
