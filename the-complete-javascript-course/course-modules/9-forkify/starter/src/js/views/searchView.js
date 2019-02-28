import { elements } from './base';
// End of imports

export const getInput = () => elements.searchInput.value;

export const clearIput = () => elements.searchInput.value = '';

export const clearResults = () => {
  elements.searchResultList.innerHTML = '';
  elements.searchResPages.innerHTML = '';
};

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

const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
    </button>
  `;

const renderButtons = (page, numResults, resPerPage) => {
  const pages = Math.ceil(numResults / resPerPage);

  let button;
  if (page === 1 && pages > 1) {
    // button to next page
    button = createButton(page, 'next');
  } else if (page < pages) {
    // two buttons page
    button = `
      ${createButton(page, 'next')}
      ${createButton(page, 'prev')}
    `
  } else if (page === pages && pages > 1) {
    // button to prev page
    button = createButton(page, 'prev');
  }

  elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (recipes, page=1, resPerPage=10) => {
  // render results of current page
  const start = (page - 1) * resPerPage;
  const end = page * resPerPage;

  recipes.slice(start, end).forEach(renderRecipe);

  // render pagination
  renderButtons(page, recipes.length, resPerPage);
};
