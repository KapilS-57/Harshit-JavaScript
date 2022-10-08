// undefined
// null

let firstName;
console.log(typeof firstName); // undefined
firstName = 'Kapil';
console.log(typeof firstName, firstName); // String Kapil

var firstName1;
console.log(typeof firstName1); // undefined


// const firstName2 ;
// console.log(typeof firstName2); // error Syntax

let myVar = null;
console.log(typeof myVar); // object
console.log(myVar); // null
console.log(null); // null
console.log(+null); // 0 ,convert type to Number
console.log(+myVar); // 0 ,convert type to Number 
// console.log(++myVar); // 1 ,convert type and add 1
console.log(!null); //true 
console.log(!!null); //false
console.log(!myVar); // true
console.log(!+myVar); // true
console.log(!!myVar); // false
console.log(!++myVar); //false
console.log(!!++myVar); //true
// null is a string object 

// myVar = +myVar; //changing null type to Number
// console.log(typeof myVar);

// myVar = '' + +myVar;     //'+myVar';
// console.log(typeof myVar); // changing null type to string type

let myVar1;
console.log(myVar1); //undefined
console.log(typeof myVar1); // undefined
console.log(!myVar1) //true
console.log(!!myVar1); // false
console.log(++myVar1); //NaN
console.log(+myVar1); //NaN

console.log(!' '); //false
console.log(!''); //true

let str = '';
let str1 = ' ';
console.log(typeof str, typeof str1); //string string
console.log(!str, !str1); //true false

