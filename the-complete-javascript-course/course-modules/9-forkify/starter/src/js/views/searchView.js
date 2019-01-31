import { elements } from './base';
// End of imports

export const getInput = () => elements.searchInput.value;

export const clearIput = () => elements.searchInput.value = '';

export const clearResults = () => elements.searchResultList.innerHTML = '';

const limitRecipeTitle = (title, limit=17) => {
  if (title.length > limit) {
    let count = 0;

    title = title.split(' ')
    title.forEach((word, i, array) => {
      count += word.length + 1;
      if (!(count <= limit)) {
        array.splice(i, array.length);
      }
    });
    return title.join(' ');
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
