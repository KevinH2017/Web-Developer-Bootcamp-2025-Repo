// Making an array:
const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
console.log(colors[0]); // "red"

// They have a length:
console.log(colors.length); //3

// Important array methods:
//push(value) - adds value to the END of an array
//pop() - removes and returns last value in array

//unshift(val) - adds value to START of an array
//shift() - removes and returns first element in an array


// Calling the array in console.log will also tell you how many elements there are in it (#)
const arrayTest = [1, 2, 3, 4, 5, 6];
console.log(arrayTest);
console.log(arrayTest.push(10));         // adds value to the END of an array
console.log(arrayTest);
console.log(arrayTest.pop());            // removes and returns last value in array
console.log(arrayTest.unshift(20));      // adds value to START of an array
console.log(arrayTest.shift());          // removes and returns first element in an array
console.log(arrayTest);

// array can be concatenated with string literals
let arrayString = `This is the array ${arrayTest}`;
console.log(arrayString);


// concat() arrays
const array1 = ['a','b','c'];
const array2 = ['d','e','f'];
const array3 = [1,2,3,4];
console.log(array1.concat(array3));

// includes() checks for a value, is case sensitive
console.log(array1.includes('a'));

// indexOf() checks index number of element, -1 means false, it is not in the array
console.log("Blue".indexOf('u'));        // indexing starts at 0

// reverse() reverses an array, it changes the original
const array4 = ['a','b','c','d','e','f'];
array4.reverse();
console.log(array4);

// slice() returns a copy of a portion of an array, index starts at 0
const array5 = [1,2,3,4,5,6,7,8];
console.log(array5.slice(1,4));          // Starting index up to and excluding Ending index
console.log(array5);                     // This is not destructive

// splice() changes the contents by removing or replacing elements in an array
const array6 = ['Jan', 'March', 'April', "June"];
array6.splice(1,0,'Feb');               
console.log(array6);
array6.splice(4,0,'May');
console.log(array6);
array3.splice(2,2,25);              // (Starting index, # of elements to remove, new element to be added)
console.log(array3);

// sort() sorts array by UTF-16 units values
const numArray = [1, 124135, 1000000, 20, 100]
console.log(numArray.sort())        // [1, 100, 1000000, 124135, 20]

// triple equal operator
console.log('hi' === 'hi');
// lists are stored in different places in memory, even if their values are exactly the same
console.log(['hi', 'bye'] === ['hi', 'bye']);           // Javascript compares objects by reference in memory and not value, so this will always return false

let num1 = 87;
let num2 = 87;
console.log(num1 === num2);

let numArrayCopy = numArray;                             // POINTS to the same array
console.log(numArray === numArrayCopy);                  // Both variables are pointing to the SAME array, so this will return true

// const only keeps the reference in memory the same, the values inside the array DOES NOT STAY CONSTANT
const nums = [1,2,3];
nums.push(4);            // No error occurs
console.log(nums);
// nums = [1,2,3,4]     // Error occurs because this is a brand new array

// Arrays can be nested
const board = [['X','O','X'], ['O', null, 'X'], ['O', 'O', 'X']];
console.log(board);

