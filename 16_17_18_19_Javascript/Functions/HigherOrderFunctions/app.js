// ======================
// FUNCTIONS AS ARGUMENTS
// ======================

/**
 * Calls given function twice.
 * @param {function} func - Function argument
 */
function callTwice(func) {
    func();
    func();
}

/**
 * Calls given function 10 times.
 * @param {function} f - Function argument
 */
function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}

/**
 * Randomly outputs an integer between 1 to 6.
 */
function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie);

// ====================
// RETURNING FUNCTIONS
// ====================

function makeMysteryFunc() {
    const rand = Math.random();
    console.log(rand);
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION!");
            console.log("YOU WIN A MILLION DOLLARS!!");
        }
    } else {
        return function () {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
        }
    }
}


function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

console.log(makeBetweenFunc(5, 10));

