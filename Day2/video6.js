/* its all about dataconversion in which i learn to change number
into another datatype and other datatype like string into other data types.  
*/

let score = "33" // its a string
let score1 = "abc33" //its also a string
let score2= null // its a object
let score3= undefined //  its undefined 
let score4= true // its boolean

//in this both score and score1 is string as both are in ""
console.log(typeof score)
// yhe output will be strign as it is in "" so it is string 

console.log(typeof score1)
// the output will be in string as the object is in ""

console.log(typeof score2)
// the output will be in object as the value in it is null so the null is classified as object in javascrpt 

console.log(typeof score3)
//the output will be undefied as it sis different datatype 

console.log(typeof score4)
// the outpus is bolean as it is in true or false stataement

//in this the score value is changed into number as we have command it to change it into the number
let valueInNumber = Number(score)
console.log(score);
console.log(typeof(score))


//in this the score1 value which is combination of both number and alphabet is beign trying to be changed into number
let valueInNumber1 = Number(score1)
console.log(valueInNumber1);
console.log(typeof(valueInNumber1)) // the output is NaN which is
// not a number thus it can't be converted

//the null datatype is changed into other datatype number or strign
let valueInNumber2 = Number(score2)
let valueInNumber_2 = String(score2)
// this can't be done and it shows error 
// let valueInNumber__2 = undefined(score2) 
console.log(valueInNumber2)
console.log(valueInNumber_2)
// console.log(valueInNumber__2);
console.log(typeof(valueInNumber2))
console.log(typeof(valueInNumber_2))
// console.log(typeof(valueInNumber__2))


console.log("///////undefined////////")
//in this undefined is changed into different datatype 
let valueInNumber3 = Number(score3)
//undefined can't be chnaged into number
let valueInNumber_3 = String(score3)
//undefined even though change dinto strign it si as it is
console.log(valueInNumber3)
console.log(valueInNumber_3);
console.log(typeof(valueInNumber3))
console.log(typeof(valueInNumber_3))


//bolean into other datatypes

let valueInNumber4 = Number(score4)
//boolean is changed into number if true => 1 and false then => 0

let valueInNumber_4 = String(score4)
//the boolena is chanegd into strign as it is 


console.log(valueInNumber4)
// it show number as it is chaged
console.log(valueInNumber_4);
// it shows strign  as it s changed into

console.log(typeof(valueInNumber4))
console.log(typeof(valueInNumber_4))



