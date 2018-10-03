// in JavaScript constructor or prototype === class in other languages

// Function constructor

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

// mike.calculateAge();
// jane.calculateAge();
// mark.calculateAge();
mark.hello();
mike.hello();
jane.hello();

console.log(mark.lastName);
console.log(mike.lastName);
console.log(jane.lastName);
