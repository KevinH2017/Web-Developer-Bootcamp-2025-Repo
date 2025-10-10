// Numbers:
1;
-99;
0.345345;

//Making variables with let:
let numberOfFriends = 1;

//Incrementing:
numberOfFriends += 3; //numberOfFriends is now 4

// Variables with const
const minimumAge = 21; //CANNOT REASSIGN!

//Booleans - true or false values
true;
false;
let isHappy = true;

//Naming Conventions
// Use upper camel-cased names:
let numberOfChickens = 6; //GOOD
// NOT THE JS WAY:
// let number_of_chickens = 6;

console.log(numberOfFriends);        // 4
// Follows order of operations
// % finds the remainder
console.log((13%5)**2);              // 9
console.log(200+0/0);                // NaN

let numHens = 5;
let numRoosters = 2;
let totalChickens = numHens + numRoosters;
console.log(totalChickens);

const fixed = 123;
let number;
console.log(typeof(fixed));
console.log(typeof(number));
number = "123";
console.log(typeof(number));
number = 123;
console.log(typeof(number));

let i = 0;
i++;
console.log(i);
let j = 5;
let result = j++;
console.log(result);
console.log(j);
let k = 0;
++k;
console.log(k);

// var variables can be called before they are given value
console.log(num_var);       // outputs Undefined, but no error
var num_var = 123;
console.log(num_var);

// let variables cannot be called before given a value
// console.log(num_var_2);  // outputs error, cannot access an uninitialized variable
// let num_var_2 = 0;
// console.log(num_var_2)

