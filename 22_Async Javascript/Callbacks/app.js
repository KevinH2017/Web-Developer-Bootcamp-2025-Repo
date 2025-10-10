// Callbacks allow the browser to run sections of code even though javascript runs one line at a time,
// this lets javascript to move on with the rest of the code despie only able to read one line at a time,
// setTimeout() allows javascript to run sections of code after a specified amount of time
console.log("Sending request to server!")
setTimeout(() => {
    console.log("Here is your data from the server...")
}, 3000)
setTimeout(() => {
    console.log("I printed 5 seconds later...")
}, 5000)
console.log("I AM AT THE END OF THE FILE!")