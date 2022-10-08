//ternary operators

let age = 22;

let drink = age >= 21 ? 'Coctails' : 'Soft Drinks';
console.log(drink);

let name = 'Kapil';

// && and || operator
let entry = age >= 21 && name[0] === 'K' ? 'Permitted' : 'Not Permitted';
console.log(entry);

// nested if else

let pinCode = 124001;
let userGuess = +prompt("PinCode for Rohtak");
console.log(typeof userGuess, userGuess);

userGuess = pinCode === userGuess ? 'Welcome to Rohtak' : 'Your code is Wrong'
console.log(userGuess);

// if 
// else if

let tempInDegree;
tempInDegree = +prompt('Enter your Location Temprature in Celcius');
console.log(typeof tempInDegree, tempInDegree);

if (tempInDegree < 0) {
    console.log('Extremely cold Outside');
} else if (tempInDegree < 16) {
    console.log('It is cold Outside');
} else if (tempInDegree < 25) {
    console.log('Weather is nice');
} else if (tempInDegree < 35) {
    console.log('Lets go for swim');
} else if (tempInDegree < 45) {
    console.log('It is Hot Outside');
} else {
    console.log('Extremely Hot Outside');
}

// switch case

let day;
day = +prompt('Enter a number to print Day');
switch (day) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thrusday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
}