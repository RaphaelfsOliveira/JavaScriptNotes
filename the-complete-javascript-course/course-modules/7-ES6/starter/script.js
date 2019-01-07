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
