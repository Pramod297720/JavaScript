// // string in javascript

// const fname = "pramod"
// const lname= "Adhikari"
// console.log(`my name is ${fname} and my last name is ${lname}`);

// //position of the text
// const test = "Hellopramod";
// console.log(test.toUpperCase());
// console.log(test.length);
// console.log(test.indexOf('p'));

// //we can't use negative index in substring 

// const newTest = test.substring(0,5);
// console.log(newTest)

// //we can use negative index in slice 
// const anotherTest = test.substring(-8,5);
// console.log(anotherTest)

// //trim is used to remove space from start and end and if we want to remove only form start or end we have to use trimStart() or trimEnd()

// const newString = "       hello1        "
// console.log(newString.trim());

// //if the charector dhas string then change it into the array 

// let testField = "HEllo this is a test fiedl"
// console.log(testField.split(" "))



// String function test 
const name = 'pramod'

let stringTest = "Hello How are you?"
let stringTest1= `${name}`
//at let you fin dthe item at the given index
console.log(stringTest.at(4))
//same as at 
console.log(stringTest.charAt(8))
//return the unicode of the charecter at the specified index
console.log(stringTest.charCodeAt(8));

//Returns the Unicode of the character at a specified index
console.log(stringTest.codePointAt(8))

// add two string
console.log(stringTest.concat(stringTest1))

//if the last charector is in the strign it return true else false
console.log(stringTest.endsWith('?'))

//if the charector is in strig it return true else false
console.log(stringTest.includes('u',6))

//length of total 
console.log(stringTest.length)

//
console.log(stringTest.localeCompare(stringTest1));


// blink
console.log(stringTest.blink())
