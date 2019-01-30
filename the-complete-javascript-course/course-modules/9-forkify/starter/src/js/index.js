// Global app controller
import string from './models/Search';
// import {add as a, mult as m, ID} from './views/searchView';
import * as searchView from './views/searchView';

console.log(`${string} ${searchView.add(searchView.ID, 2)} ${searchView.mult(2, searchView.ID)}`);
