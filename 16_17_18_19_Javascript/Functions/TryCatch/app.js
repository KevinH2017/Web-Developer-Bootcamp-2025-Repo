
// try {
//     hello.toUpperCase();
// } catch {
//     console.log("ERROR!!!!")
// }
// hello.toUpperCase();

// console.log("AFTER!")

/**
 * Repeats string 3 times.
 * @param {string} msg - String 
 */
function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log("Please pass a string next time!")
    }
}

yell('Hello');
yell(123);