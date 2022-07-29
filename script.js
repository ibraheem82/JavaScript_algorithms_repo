// ========> Variables and values in javascript  <======== //

// let name = 'ibraheem';
// console.log(40 + 8 + 23 - 10)
// console.log('Jonas');
// console.log(23);
// let firstname = 'Omikunle';
// console.log(firstname);
// console.log(firstname);
// console.log(firstname);
// let myFirstJob = 'Programmer';
// let myCurrentStatus = 'Student';
// console.log(myFirstJob);







// ========> Data Types in javascript  <======== //

// ===> Boolean
// let javascriptIsFun = true
// console.log(javascriptIsFun);
// console.log(typeof true);
// console.log(typeof javascriptIsFun);

// // ===> String
// let name = 'Ayomide';
// console.log(typeof name);

// // ===> Number
// let year;
// year = 2000;
// console.log(typeof year);




// ========> var, let and const in javascript  <======== //
// ===> let can be reassign or they can mutate
// ===> let is block scope
// let age = 40;
// age = 31;

// ===> const are use to declear variables that are not suppose to change.
// const birthday = 2001;
// birthday = 2000;


// const is a old way of assigning variables in es6
// var is function scope
// var job = 'Software Developer';
// job = 'Student';

// lastName = 'Omikunle';
// console.log(lastName);


// ========> Basic operators in javascript  <======== //
// ===> Arithmetics operators
// const ageIbraheem = 2032 - 2001;
// const ageCoder = 2049 - 2001
// console.log(ageIbraheem, ageCoder);




















// hasOwnProperty()
// function checkObj(obj, checkProp) {
//     if (obj.hasOwnProperty(checkProp)) {
//       return obj[checkProp];
//     } else {
//       return "Not Found";
//     }
//   }

  
//   Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.


// Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.
// const myStorage = {
//     "car": {
//       "inside": {
//         "glove box": "maps",
//         "passenger seat": "crumbs"
//        },
//       "outside": {
//         "trunk": "jack"
//       }
//     }
//   };
  
//   const gloveBoxContents = myStorage.car.inside["glove box"];






//   Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.
// ! secondTree should equal the string pine.
// ! Passed:Your code should use dot and bracket notation to access myPlants.


  // const myPlants = [
  //   {
  //     type: "flowers",
  //     list: [
  //       "rose",
  //       "tulip",
  //       "dandelion"
  //     ]
  //   },
  //   {
  //     type: "trees",
  //     list: [
  //       "fir",
  //       "pine",
  //       "birch"
  //     ]
  //   }
  // ];
  
  // const secondTree = myPlants[1].list[1];




var person = Object.create({
  name: "ibraheem",
  profession: "Programmer"
});
delete person.profession;

console.log(person.profession);