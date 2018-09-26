/////////////////////////////////////
// Lecture: Hoisting

/*
// functions
calculateAge(1965);
console.log('before function');

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}
// retirement(1956); // only works after declaration because
// this is a variable


// variables

console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/



/////////////////////////////////////
// Lecture: Scoping

/*
// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    console.log('fist1');
    second();

    function second() {
        var c = 'Hey!';
        console.log('second1');
        console.log(a + b + c);
    }
}
*/
// Example to show the differece between execution stack and scope chain
/*
var d = 'Hello!';
first();

function first() {
    var e = 'Hi!';
    console.log('fist2');
    second();

    function second() {
        var f = 'Hey!';
        console.log('second2');
        third()
    }
}

function third() {
    var g = 'John';
    // console.log(f);
    console.log('third2');
    console.log(d + g);
}
*/



/////////////////////////////////////
// Lecture: The this keyword

/*
//console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        function innerFunction() {
            console.log('innerFunction', this);
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/
