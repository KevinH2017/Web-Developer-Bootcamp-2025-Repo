// How to add docstring to function use below
/**
 * Outputs DO RE MI strings in console.
 */
function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

/**
 * Greets user with firstName and lastName and outputs to console.
 * @param {string} firstName - String of first name
 * @param {string} lastName - String of last name
 */
function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

/**
 * Repeats a given string a number of times.
 * @param {string} str - String input
 * @param {number} numTimes - Number of times to repeat
 */
function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}


/**
 * Returns sum of given numbers and returns false for invalid input.
 * @param {number} x - First number to add
 * @param {number} y - Second number to add
 * @returns {number} The sum of x and y
 */
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

/**
 * This function adds two numbers together and returns sum.
 * @param {number} num1 - The first number to add.
 * @param {number} num2 - The second number to add.
 * @returns {number} The sum of num1 and num2.
 */
function addNumbers(num1, num2) {
    return num1 + num2;
  }

  
// Call functions
singSong();
greet('Kevin', 'Hui');
repeat('Hello', 25);
let result = add(1,2);
console.log(result);
let result2 = addNumbers(2, 3);
console.log(result2);
console.log(add('a','b'));