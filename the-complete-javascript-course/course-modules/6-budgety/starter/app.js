// BUDGET CONTROLLER
var budgetController = (function() {

  // code here

})();



// UI CONTROLLER
var UIController = (function() {

  // and code here

})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddItem = function() {

    // 1. Get the filed input data

    // 2. Add the item to the budget CONTROLLER

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI

    console.log('call ctrlAddItem()');

  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(e) {
    if (e.keyCode === 13 || e.which === 13) {
      console.log('ENTER was pressed!');
      ctrlAddItem();
    }

  });

})(budgetController, UIController);
