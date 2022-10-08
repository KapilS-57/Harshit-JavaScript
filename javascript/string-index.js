let fullName = "Kapil Sharma";
//            012345678912
// console.log(fullName[4]);
console.log(fullName.length);
console.log(fullName[fullName.length - 1]);




// trim()
// toUpperCase()
// toLowerCase()
// slice 

let firstName = "Kapil        ";
console.log(firstName);
console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
let newString = firstName.trim();
newString = firstName.slice(0, 4);
console.log(newString);


//convert number to string
age = 24 + ''; //adding a string change the number to variable
console.log(typeof age);//string 

// age = 18;
// age = String(age); // other method to change number to string

// convert string to number

console.log(typeof firstName);
let str = +'KapilSharma';
console.log(typeof str);

// age = '18';
// age = Number(age);
// console.log(typeof age);