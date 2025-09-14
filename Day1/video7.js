//primities

//7 datatypes
// number string bollean null undefined symbol BigInt

//number
const score = 100;
console.log(typeof(score));

//bolean
const isScore = true;
console.log(typeof(isScore));

//null
const isValueTemp = null;
console.log(typeof(isValueTemp))

//const
let Value;
console.log(typeof(Value))

//sumbol
const id = Symbol('123')
const anotherid = Symbol("123")

console.log(id == anotherid);

console.log(typeof(id));
//bignumber
const bigNumber = 800887987987n
console.log(typeof(bigNumber))

//references

//array objects functions

//array
const heros = ['ironman','superman','batman'];

//objects
let name = {
    name: 'pramod',
    age: 20
}

//function
function functionTest() {
    console.log("Hello world");
}
functionTest();


console.log(typeof(heros, name , functionTest))