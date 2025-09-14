/* video 4 is all about variable and constant in the javascript
in javascrpt there are 3 variable and constant whicha are 

vaiable - let , var 
constant - const 

constant - const 
let me first descript it 
const value when used can;t be changed 

variable - let , var 
let and var both vaiable can be changed so the difference between it is that 
var is used in old programming script in which var can't be used in block scope and scope so to remove this problem 
let is used. let remove the var progrma so do not used var in javascript
*/

const userId = "1" // its value is fixed
let username = "pramod" // good practice and can be changed
var country = "Nepal" // bad practice and good for chaneg 
city = "KTM" // not a good practice bu the value can be change
let state; // can be added in future so just leaving like that 

console.log(userId);
console.table([username, country, city , state]); // its print in table form and make it easier to see and read the data 

// lets chaneg the value 

//const userId = "2" userid is already defined so can't be reused.  
username = "Hari" // we can't redeclare the let in same scope again so we remove let on this so that program sautomaticaly assign it to the let variable
var country = "USA" 
city = "Texas"

console.table([username, country, city , state]) // its print in table form and make it easier to see and read the data 
console.log(userId, username, country, city,state) // usign this we cna print all the data
