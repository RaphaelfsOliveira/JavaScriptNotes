// Lecture: let and const
/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 25;
name6 = 'Jane Miller'
console.log(name6);
*/

// ES5
/*
function driversLicence5(passedTest) {
  if (passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1990;
  }
  console.log(firstName + ' ' + yearOfBirth + ' ES5');
}

driversLicence5(true);

// ES6
// no JS ES6 as variaveis let e constantes const pertemcem somente ao
// contexto do blocoe não mais da função como anteriomente.
function driversLicence6(passedTest) {
  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = 'John';
  }
  console.log(firstName + ' ' + yearOfBirth + ' ES6');
}

driversLicence6(true);
*/

///////////////////////////////////////////
// Lecture: Blocks and IIFEs

/*
// IIFE ES5
(function() {
  var c = 3;
})();

// IIFE ES6
{
  const a = 1;
  let b = 2;
}
*/

///////////////////////////////////////////////
// Lecture: Strings
// novos recursos Strings
/*
let firstName = 'john';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2019 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName +
'. He was born in ' + yearOfBirth + '. Today, he is '
+ calcAge(yearOfBirth)+ ' years old.');

// ES6
// nova função do ES6 backticks sistema de templates para
// usar variaveis dentro de strings
console.log(`This is ${firstName} ${lastName}
. He was born in ${yearOfBirth}. Today, he is
${calcAge(yearOfBirth)} years old.`);

// funções para verificar se a string começa ou termina com
// esses caracteres, includes para ver se a string inclui
// esses caracteres
const n = `${firstName} ${lastName}`;
console.log(
  n.startsWith('j'),
  n.endsWith('ith'),
  n.includes(' '),
  n.includes('oo'),
  `${firstName} `.repeat(5)
);
*/

//////////////////////////////////
// Lecture: Arrow functions
/*
const years = [1990, 1965, 1982, 1937];

// ES5
var age5 = years.map(function(e) {
  return 2019 - e;
});
console.log(`ES5: ${age5}`);

// ES6
let age6 = years.map(e => 2019 - e);
console.log(`ES6: ${age6}`);

age6 = years.map((e, i) => `Age Element ${i + 1}: ${2019 - e}`);
console.log(age6);

age6 = years.map((e, i) => {
  const now = new Date().getFullYear();
  const age = now - e;
  return `Age Element ${i + 1}: ${age}`;
});
console.log(age6);
*/


//////////////////////////////////
// Lecture: Arrow functions 2
/*
// ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    var self = this;
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number '+ self.position +' and it is '+
      self.color;
      alert(str);
    });
  }
}
// box5.clickMe();

// ES6
var box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', () => {
      var str = `This is box number ${this.position} and it is ${this.color} ES6`;
      alert(str);
    });
  }
}
box6.clickMe();


function Person(name) {
  this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {

  var arr = friends.map(function(e) {
    return this.name +' is friends with '+ e;
  }.bind(this));

  console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends) {

  var arr = friends.map(e => `${this.name} is friends with ${e}`);
  console.log(arr);
}
new Person('Mike').myFriends6(friends);
*/
















// end of the world
