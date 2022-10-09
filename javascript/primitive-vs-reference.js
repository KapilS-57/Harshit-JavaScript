// primitive vs refernece types

let num1 = 6;
let num2 = num1;
console.log('value of num1 is', num1);
console.log('value of num2 is', num2);
num1++;
console.log('After increment num1 value');
console.log('value of num1 is', num1);
console.log('value of num2 is', num2);


// refernece type
//  array

let array1 = ['item1', 'item2'];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);

array1.push('item3');
console.log('After adding item3 in array1');
console.log("array1", array1);
console.log("array2", array2);



// array clone

// let array2 = array.slice(0).concat(['item3','item4']);
// let array2 = [].concat(array2);

// new way 
// spread operator
// let array2 = [...array1]; // used mostly

// let oneMoreArray = ['item3','item4','item5'];
// let array3 = [...array1, ...oneMoreArray];