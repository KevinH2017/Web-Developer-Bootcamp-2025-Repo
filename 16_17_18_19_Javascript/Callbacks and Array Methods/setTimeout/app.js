// Intervals start counting all at the same time

// setTimeout counts in miliseconds, every 1000 miliseconds is 1 second
console.log("HELLO!!!...");
setTimeout(() => {
    console.log("...are you still there?")
}, 3000);

console.log("GOODBYE!!");

// setInterval counts in miliseconds, every 1000 miliseconds is 1 second
const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

// clearInterval(id);