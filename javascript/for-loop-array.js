// for loop in array

let fruits = ['apple', 'mango', 'grapes', 'orange', 'banana', 'pineapple'];
let fruits2 =[];
console.log(fruits.length);
// console.log(fruits[fruits.length-1]);

for(let i =0; i<fruits.length; i++){
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);



// using const for creating array

// heap memory ['apple','mango'];


//  for loop in array

// const fruits = ['apple', 'mango', 'grapes', 'orange', 'banana', 'pineapple'];
// const fruits2= [];
// for (let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
// }