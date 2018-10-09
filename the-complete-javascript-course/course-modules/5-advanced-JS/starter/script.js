// in JavaScript constructor or prototype === class in other languages

// Function constructor
/*
var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.hello = function() {
    console.log(this.name +' age: '+ this.calculateAge());
  };
}

Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
  return 2018 - this.yearOfBirth;
};

Person.prototype.lastName = 'Smith';

var mike = new Person('mike', 1995, 'driver');
var jane = new Person('jane', 1969, 'designer');
var mark = new Person('mark', 1948, 'programmer');

mike.calculateAge();
jane.calculateAge();
mark.calculateAge();
mark.hello();
mike.hello();
jane.hello();

console.log(mark.lastName);
console.log(mike.lastName);
console.log(jane.lastName);
*/


// Object.create
/*
var personProto = {
  calculateAge: function() {
    console.log(2018 - yearOfBirth);
  }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: {value: 'Jane'},
  yearOfBirth: {value: 1969},
  job: {value: 'designer'}
});
*/


// Primitives vs Objects

// Primitives
/*
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);

// Objects
var obj1 = {
  name: 'John',
  age: 26
}

var obj2 = obj1;
obj2.age = 30;

console.log(obj1);
console.log(obj2);

// Functions
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj);
*/


// Lecture: Passing Functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(array, fn) {
  var arrRes = [];

  for (var i = 0; i < array.length; i++) {
    arrRes.push(fn(array[i]));
  }
  return arrRes;
}

function calculateAge(ele){
  return 2018 - ele;
}

function isFullAge(ele) {
  return ele >= 18;
}

function maxHeartRate(ele) {
  if (ele >= 18 && ele <= 81) {
    return Math.round(206.9 - (0.67 * ele));
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/


// Lecture: Functions returning Functions
/*
function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name +', can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, '+ name +' ?');
    }
  } else {
    return function(name) {
      console.log('Hello '+ name +', what do you do ?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var desinerQuestion = interviewQuestion('designer');
desinerQuestion('Mike');
desinerQuestion('Jane');
desinerQuestion('Mark');

interviewQuestion('teacher')('Jack');
*/


// Immediately Invoked Function Expressions (IIFE)


























































































//
