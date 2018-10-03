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

























//
