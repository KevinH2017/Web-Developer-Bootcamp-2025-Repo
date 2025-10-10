console.log("THIS IS MY JAVASCRIPT");

console.log(`1 + 3 is ${1 + 3}`)        // Backticks for putting variables and operations into strings
console.log("GOODBYE")

let rating = 2;
if (rating === 3) {
    console.log("RATING IS 3")
}
else if (rating === 2) {
    console.log("RATING IS 2")
}

const dayOfWeek = 'Monday';

if (dayOfWeek === 'Monday') {
    console.log("UGHHH I HATE MONDAYS!")
} else if (dayOfWeek === "Saturday") {
    console.log("ITS SATURDAY")
}

const age = 100;

if (age >= 0 && age < 5 || age >= 65) {
    console.log("FREE");
} else if (age >= 5 && age < 10) {
    console.log("$10");
} else if (age >=10 && age < 65) {
    console.log("$20");
} else {
    console.log("INVALID AGE");
}

console.log(!null);
console.log(! (0===0));
console.log(! (3 <= 4));

let firstName = prompt("Enter your first name:");
if (!firstName) {
    firstName = prompt("Try Again, Enter your first name:");
} else {
    console.log(firstName)
}

const dayNum = 2;
// switch-case where the variable is matched to the corresponding case, every case must end with break; or the rest will run as well
switch(dayNum) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;

    // if case 8 occurs, then case 9 is also run
    case 8:
    case 9:
        console.log("ERROR!");
        break;
    default:
        console.log("Something went wrong!");
        break;
}

