// require() points to math.js file in same directory to get variable PI and function square()
const { PI, square } = require('./math');

console.log(PI)         
console.log(square(9))

// require() can also point to folders
// Gets dictionary values from folder shelter
const cats = require('./shelter')

console.log("REQUIRED AN ENTIRE DIRECTORY!", cats)
