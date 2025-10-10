// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }

// COLLECT THE "REST" IN NUMS:
function sum(...nums) {
    return nums.reduce((total, el) => total + el)
};
// sum() can take multiple parameters
console.log(sum(1,2,3,4,5));

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
};
// Parameters can be combinations of individual values and arrays with ...
raceResults('User 1', 'User 2', 'Tammy', 'Todd', 'Tina', ['Blue', 'Scout', 'Rocket']);