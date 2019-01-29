// const first = () => {
//   console.log('hey there');
//   second();
//   t();
//   t3();
//   t4();
//   console.log('The End');
// }
//
// const second = () => {
//   setTimeout(() => {
//     console.log('Async Hey there');
//   }, 2000);
// }
//
// const t = () => {
//   setTimeout(() => {
//     console.log('async opaaa');
//   }, 1);
// }
//
// const t3 = () => {
//   setTimeout(() => {
//     console.log('async 3');
//   }, 4000);
// }
//
// const t4 = () => {
//   setTimeout(() => {
//     console.log('async 4');
//   }, 2522);
// }
//
// first();

///////////////////////////////////////////////////////////
// The Old Way: Asynchronous JavaScript with Callbacks

// const getRecipe = () => {
//   setTimeout(() => {
//     const recipeID = [543, 795, 213, 198];
//     console.log(recipeID);
//
//     setTimeout((id) => {
//       const recipe = {
//         title: 'Fresh Tomato pasta',
//         publisher: 'Jonas'
//       };
//       console.log(`${id}: ${recipe.title}`);
//
//       setTimeout(publisher => {
//         const recipe2 = {
//           title: 'Italian Pizza',
//           publisher: 'Jonas'
//         };
//         console.log(recipe2);
//       }, 1500, recipe.publisher)
//
//     }, 1000, recipeID[2]);
//   }, 1500);
// }
// getRecipe();


/////////////////////////////////////////////////////////////////////
// From Callback Hell to Promises
//
const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([543, 795, 213, 198]);
  }, 2000);
});

const getRecipe = recID => {
  return new Promise((resolve, reject) => {
    setTimeout(ID => {
      const recipe = {
        title: 'Fresh Tomato pasta',
        publisher: 'Jonas'
      };
      resolve(`${ID}: ${recipe.title}`);
    }, 1500, recID);
  });
};

const getRelated = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(pub => {
      const recipe = {
        title: 'Italian Pizza',
        publisher: 'Jonas'
      };
      resolve(`${pub}: ${recipe.title}`);
    }, 1500, publisher)
  });
};

// getIDs.then(IDs => {
//   console.log(IDs);
//   return getRecipe(IDs[2]);
//
// }).then(recipe => {
//   console.log(recipe);
//   return getRelated('Jonas');
//
// }).then(recipe => {
//   console.log(recipe);
//
// }).catch(error => {
//   console.log('Errorr', error);
// });


/////////////////////////////////////////////////////////////////////
// From Promises to Async/Await

// async function getRecipesAW() {
//   const IDs = await getIDs;
//   console.log(`getRecipesAW`, IDs);
//
//   const recipe = await getRecipe(IDs[3]);
//   console.log('getRecipesAW', recipe);
//
//   const related = await getRelated('Jonas');
//   console.log('getRecipesAW', related);
//
//   return recipe;
// }
// getRecipesAW().then(result => console.log('test', result));















































































// The end of world;
