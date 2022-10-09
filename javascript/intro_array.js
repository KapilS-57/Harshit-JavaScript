//  intro to array
// reference type are also called as object


// let fruits = ['Mango','Apple','Orange','Grapes'];
// console.log(fruits);

// let numbers = [1,2,3,4,5];
// console.log(numbers);

// let mixed = [1,2,3,null,undefined,'Kapil',2.45];
// console.log(mixed);

let fruits = ['Mango','Apple','Orange','Grapes'];
console.log(fruits);
fruits[1] ='Banana';
console.log(fruits);

console.log(typeof fruits);
console.log(Array.isArray(fruits)); // true

let obj = {}; //object literal
console.log(typeof obj); //object
console.log(Array.isArray(obj)); // false


// array push pop 
//  array shift unshift


//  Push Pop is faster then Shift unshift



// push 
fruits.push('Peach');
console.log(fruits);  // arrays are mutable but strings are Immutable

// pop
fruits.pop();
console.log(fruits); // removes last array index value
console.log(fruits.pop()); //grapes

// unshift  add elemsnts in starting
fruits.unshift('Leechi')
console.log(fruits);

// shift  removes element in starting 

fruits.shift();
console.log(fruits);
 
