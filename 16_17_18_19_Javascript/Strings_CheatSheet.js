// Making Strings
let color = "purple";

// Single quotes work too:
let city = 'Tokyo';

//Strings have a length:
city.length;                //5

//We can access specific characters using their index:
city[0];                    //'T'
city[3];                    //'y'

// String methods:
'hello'.toUpperCase();      // "HELLO";
'LOL'.toLowerCase();        // "lol"
'    omg  '.trim();         // "omg"

// String methods with arguments:
// ==============================

//indexOf returns the index where the character is found (or -1 if not found)
'spider'.indexOf('i');          //2
'vesuvius'.indexOf('u');        //3 - only returns FIRST matching index
'cactus'.indexOf('z');          //-1 not found

// slice - returns a "slice" of a string
"pancake".slice(3);             //"cake" - slice from index 3 onwards
"pancake".slice(0, 3);          //"pan" - slice from index 0 up to index 3

// replace - returns a new string, with the FIRST match replaced
"pump".replace("p", "b");       //"bump" - only replaces first "p"

// String Template Literals
// Use backtick characters, NOT SINGLE QUOTES!
// ========================
const color2 = "olive green";
const msg = `My favorite color is: ${color2}`;               //"My favorite color is: olive green"

const str = `There are ${60 * 60 * 24} seconds in a day`;    //"There are 86400 seconds in a day"


let sentence = 'This is the word "hello"';           // hello is in double quotes
console.log(sentence);
let sentence2 = "This is another word 'hello'";      // hello is in single quotes
console.log(sentence2);

let animal = "Dumbo Octopus";
console.log(animal);
console.log(animal[0]);
console.log(animal[1]);
console.log(animal[6]);
console.log(animal[99]);         // theres is no character at index 99 so it outputs undefined

let greeting = '     a     leave me alone     s        ';          // Removes only whitespace before and after characters
let newGreeting = greeting.trim();
console.log(newGreeting);

let greeting2 = '     leave me alone     ';
let newGreeting2 = greeting2.trim();
console.log(newGreeting2);

let product = "Avocado";
let cost = 2.25;
let qty = 5;

// Template literal, allows you to put variables, methods, and operations into strings
// Can only be used with backticks ``
let totalCost = `You bought ${qty} ${product}s. The total is $${cost * qty}.`;
console.log(totalCost);

// ===========================
//      Null & Undefined
// ===========================
// Null is intentional absence of any value and must be assigned
// Undefined are variables that do not have an assigned value

let loggedInUser = null;
console.log(loggedInUser);
loggedInUser = 'PERSON';
console.log(loggedInUser);

// ===========================
//      Math Object
// ===========================

console.log(Math.PI);
console.log(Math.round(2.75));       // Rounds to nearest whole number
console.log(Math.round(2.2));
console.log(Math.pow(5,2));          // 5 to the power of 2 (Base, Exponent)
console.log(Math.floor(2.9));        // Rounds to lowest whole number
console.log(Math.ceil(2.1));         // Rounds to highest whole number
console.log(Math.random());          // A random decimal number between 0 and 1, not including 1

// ===========================
//      Random Integers
// ===========================

const number = Math.random()
const randomInteger = Math.floor(number * 10)
const newNumber = Math.floor(number * 5 + 1)

console.log(randomInteger)          // Random integer from 0 to 9
console.log(newNumber)              // Random integer from 1 to 5

// ===========================================
//      Equality: Double vs Triple equals
// ===========================================

// Double equals checks for equality but not their data types
console.log(1 == 1);            // true
console.log(1 == '1');          // Still true, even if one is an integer and a string
console.log('b' == 'c');        // false
console.log(true == false);     // false
console.log(false == false);    // true
console.log(null == undefined);  // true
console.log(0 == false);        // true

// Triple equals checks for equality AND their data type
console.log(1 === '1');          // false
console.log(0 === false);        // false

// praseInt gets the intger from a string
console.log(parseInt("101asdfgafgasdfghfd"));
console.log(parseInt("10124"));

// praseFloats gets the float from string
console.log(parseFloat("12.123sdagzdfbdb"));
console.log(parseFloat("123142.123"));

