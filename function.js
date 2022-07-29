'use strict';





function logger() {
    console.log('My name is Ibraheem');
}
// ===> invoker
logger();
logger();
logger();



// ===> a function can also return a data or value
// function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice =  fruitProcessor(5, 0);

// console.log(appleJuice);
// console.log(fruitProcessor(8, 9));



// const appleOrangeJuice = fruitProcessor(5, 7)

// console.log(appleOrangeJuice);


/* FUNCTION DECLARATIONS */


function greet(firstName = 'Biola', lastName = 'Ajibola') {
    // if (typeof firstName === 'undefined') {firstName = 'Ibraheem'}
    // if (typeof lastName === 'undefined') {lastName = 'Omikunle'}
    return 'Hello ' + firstName + ' ' + lastName;
    
}

console.log(greet('ibraheem', 'omikunel'));


// FUNCTION DECLEARATIONS

// function greet(firstName, lastName){
    // * what you can also do is do pass in the parameters like that.
function greet(firstName = 'Trelor', lastName = 'Steve'){

    // ! back in es5
    if(typeof firstName === 'undefined') {firstName = 'John'}
    if(typeof lastName === 'undefined') {lastName = 'Brad'}

    // console.log("hello");
    return 'Hello ' + firstName + ' ' + lastName;

}
// the one below is overriding it
// console.log(greet('Ibraheem', 'Adeoye'));
console.log(greet());




// FUNCTION EXPRESSIONS
// * function expressions is putting a function as a variable assignment.

// they are anonymous if you have an expressions like this.
const square = function(x) {
    return x*x;
};
console.log(square(8));


// const square = function (x = 3) {
//     return x*x;
    
// }

// console.log(square());


/* IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFs */
// * [iife] is a function that you declear and run at the same time.

// this is an expression

(function() {
    console.log('Function run.....🏃‍♀️🏃‍♀️🏃‍♀️🏃‍♀️🏃‍♀️🏃‍♀️🏃‍♀️🏃‍♀️');

    // ! the function is incomplete without the prenthesis.
})();

(function(name) {

    console.log('Hello ' + name);
})('Ibraheem')


// * PROPERTY METHOD
// * when a function is put inside an object it is called a [method].

const todo = {
    add: function() {
        console.log("Add my name....");
    },

    edit: function(name){
        console.log(`Edit Ibraheem to =>  ${name}`);
    }
}

// * You can also put it outside

todo.delete = function() {
    console.log('Delete todo.....');
}

todo.add();
todo.edit('Omikunle');
todo.delete();