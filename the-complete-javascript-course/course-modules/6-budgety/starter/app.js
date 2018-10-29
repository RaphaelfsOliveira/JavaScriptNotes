// BUDGET CONTROLLER
var budgetController = (function() {

  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    ID: {
      exp: 0,
      inc: 0
    }
  }

  return {
    addItem: function(type, des, val) {
      var newItem, ID;
      ID = data.ID[type]

      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }

      data.allItems[type].push(newItem);
      data.ID[type]++;
      return newItem;
    },

    testing: function() {
      console.log(data);
    }
  };

})();



// UI CONTROLLER
var UIController = (function() {

  var DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }

  return {

    getInput: function() {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // will be either inc or exp
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value
      };
    },

    addListItem: function(obj, type) {
      var html;

      // create HTML strin wit placeholder text

      if (type === 'inc') {
        html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === 'exp') {
        html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }




      // Replace the placeholder text with somw actual data

      // Insert the HTML into the DOM

    },

    getDOMStrings: function() {
      return DOMStrings;
    },

  };

})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var setupEventListeners = function() {
    var DOMStrings = UICtrl.getDOMStrings();

    document.querySelector(DOMStrings.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(e) {
      if (e.keyCode === 13 || e.which === 13) {
        ctrlAddItem();
      }
    });
  }

  var ctrlAddItem = function() {
    var input, newItem;

    // 1. Get the filed input data
    input = UICtrl.getInput();

    // 2. Add the item to the budget CONTROLLER
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI

  }

  return {
    init: function() {
      console.log('Application has started');
      setupEventListeners();
    }
  };

})(budgetController, UIController);


controller.init();
