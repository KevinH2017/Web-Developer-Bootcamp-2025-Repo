// Spreads can affect strings, such turning string 'hello' into individual strings 'h' 'e' 'l' 'l' 'o'
console.log(...'hello');
console.log({...[2,4,6,8]});        // Object lists will spread with their indexes
console.log({...'HELLO!'});         // The same for strings

const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];
// SPREAD IN FUNCTIONS
console.log(Math.max(nums));         //NaN
console.log(Math.max(...nums));      //53456


// SPREAD IN ARRAYS
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

// Combines both cats and dogs arrays into allPets array
const allPets = [...cats, ...dogs];
console.log(allPets);


// SPREAD IN OBJECTS
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };
// Combines both feline and canine objects into catDog object
const catDog = { ...feline, ...canine };            // 'Caninae' overwrites 'Felidae' because canine is called after feline
console.log(catDog);


const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke',
};
const newUser = { ...dataFromForm, id: 2345, isAdmin: false };
console.log(newUser);