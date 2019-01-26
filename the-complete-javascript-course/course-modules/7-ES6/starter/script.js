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

/////////////////////////////////////////////////////
// Lecture: Destructuring
/*
// ES5
var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES6
const [name, age] = ['John', 26];
console.log(name, age);

const obj = {
  firstName: 'John',
  lastName: 'Smith'
}

const {firstName, lastName} = obj;
console.log(firstName, lastName);

const {firstName: a, lastName: b} = obj;
console.log(a, b);

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1986);
console.log(age2, retirement);
*/


/////////////////////////////////////////////////////
// Lecture: Arrays
/*
const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(e) {
  e.style.backgroundColor = 'red';
});

// ES6
const boxesArr6 = Array.from(boxes);

boxesArr6.forEach(e => e.style.backgroundColor = 'dodgerblue');

// ES5
for(var i = 0; i < boxesArr5.length; i++) {
  if(boxesArr5[i].className === 'box blue') {
    continue;
  }
  boxesArr5[i].textContent = "I'm changed to blue!";
}

// ES6
for(const e of boxesArr6) {
  if(e.className.includes('box blue')) {
    continue;
  }
  e.textContent = "I'm changed to ES6";
}


// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(e) {
  return e >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


// ES6
// novas funções de array para retornar index ou elementos de
// arrays ficou muito mais facil do que no ES5
console.log(ages.findIndex(e => e >= 18));
console.log(ages.find(e => e >= 18));
*/

/////////////////////////////////////////////////////
// Lecture: Spread operator
/*
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

// essa é a expansão que o operador spread faz
console.log(ages);
console.log(...ages);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);
console.log(...bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];

Array.from(all).forEach(e => e.style.color = 'purple');
*/


/////////////////////////////////////////////////////
// Lecture: Rest parameters

// ES5
// const now = new Date().getFullYear();
/*
function isFullAge5() {
  console.log(arguments);
  var arrgsArray = Array.prototype.slice.call(arguments);

  arrgsArray.forEach(function(e) {
    console.log((now - e) >= 18);
  });
}

isFullAge5(2009, 1999, 1965);
isFullAge5(2009, 1999, 1965, 2016, 2008);


// ES6
function isFullAge6(...years) {
  console.log(years);
  years.forEach(e => console.log((now - e) >= 18));
}

isFullAge6(2009, 1999, 1965, 2016, 2008);

const now = new Date().getFullYear();

function isFullAge5(limit) {
  console.log(arguments);
  var arrgsArray = Array.prototype.slice.call(arguments, 1);

  arrgsArray.forEach(function(e) {
    console.log((now - e) >= limit);
  });
}

// isFullAge5(16, 2009, 1999, 1965);
// isFullAge5(2009, 1999, 1965, 2016, 2008);

// ES6
function isFullAge6(limit, ...years) {
  // console.log(years);
  years.forEach(e => console.log((now - e) >= limit));
}

isFullAge6(16, 2009, 1999, 1965, 2016, 2008);
*/


/////////////////////////////////////////////////////
// Lecture: Default parameters
/*
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? lastName = 'Smith' : lastName = lastName;
  nationality === undefined ? nationality = 'american' : nationality = nationality;

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}


// ES6
function SmithPerson(firstName, yearOfBirth,
  lastName='Smith', nationality='american') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
*/


/////////////////////////////////////////////////////
// Lecture: Maps
/*
const question = new Map();

question.set('question', 'What is the official name of the latest major JavaScript version');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

// console.log(question.get('question'));
console.log(question.size);

if (question.has(4)) {
  question.delete(4);
}

// question.forEach((v, k) => console.log(`This is ${k}, and it's set to ${v}`));

// for (let [key, value] of question.entries()) {
//   if (typeof(key) === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
//   // console.log(`This is ${key}, and set to ${value}`);
// }

console.log(question.get('question'));
question.forEach((v, k) => typeof(k) === 'number' ? console.log(`Answer ${k}: ${v}`) : undefined);

const ans = parseInt(prompt('What is correct answer'));

const resp = question.get(ans === question.get('correct'));
console.log(resp);
*/


/////////////////////////////////////////////////////
// Lecture: Classes















// end of the world
