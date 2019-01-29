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


/////////////////////////////////////////////////////////////////////
// Making AJAX Calls with Fetch and Promises

// const CORS = 'https://crossorigin.me/';
//
// fetch(`http://jsonplaceholder.typicode.com/users/`)
// .then(response => {
//   console.log(response);
//   return response.json();
// })
// .then(data => {
//   console.log(data);
//   data.forEach(e => {
//     console.log(e.username);
//   })
//
//   getUserData();
// })
// .catch(error => {
//   console.log('Error!!', error);
// });
//
// const getUserData = () => {
//   let name = prompt('Escolha um nome de usuário');
//   fetch(`https://jsonplaceholder.typicode.com/users/?username=${name}`)
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     console.log(data);
//     const user = data[0]
//     console.log(`
//       # Contact #
//
//       Name: ${user.name},
//       Phone: ${user.phone}
//       Email: ${user.email}
//       Website: ${user.website}
//     `);
//   })
//   .catch(error => {
//     console.log('Error!!', error);
//   });
// }


/////////////////////////////////////////////////////////////////////
// Making AJAX Calls with Fetch and Async/Await

async function getUsersAndDataAW() {

  try {
    const getUserIDs = await fetch(`http://jsonplaceholder.typicode.com/users/`);
    const dataUserIDs = await getUserIDs.json();
    console.log(dataUserIDs);

    dataUserIDs.forEach(e => {
      console.log(e.username);
    });

  } catch (error) {
    console.log('Error!', error);
  }

  let name = prompt('Escolha um nome de usuário');

  try {
    const getUserData = await fetch(`https://jsonplaceholder.typicode.com/users/?username=${name}`);
    const dataUserData = await getUserData.json()
    console.log(dataUserData);

    const user = dataUserData[0]
    const userDetails =`
    # Contact #
    Name: ${user.name}
    Phone: ${user.phone}
    Email: ${user.email}
    Website: ${user.website}`;

    alert(userDetails);
    return user;

  } catch (error) {
    console.log('Error!', error);
  }
}

const getUserData = getUsersAndDataAW();

// esse log não retorna resultado porque ele
// esta em runtime e é executado muito antes da promessa voltar
console.log(getUserData);

getUserData.then(response => {
  console.log(response);
})


/////////////////////////////////////////////////////////////////////
// Modern JavaScript: Using ES6, NPM, Babel and Webpack



































































































// The end of world;
