// To make an object literal, values are stored as KEY-VALUE pairs:
const dog = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    age: 7
};
console.log(dog);
// All KEYS will be turned into strings!

// To retrieve a VALUE:
console.log(dog.age);       // 7
console.log(dog["age"]);    // 7

// Updating values
dog.breed = "mutt";
dog["age"] = 8;

console.log(dog.breed);
console.log(dog['age']);

const person = {firstName: "Kevin", lastName:"Hui", age:25};
console.log(person);
console.log(person.firstName);
console.log(person.lastName);

// Both string and number calls work
const years = {1999:'Good', 2020:'Bad'};
console.log(years[1999]);
console.log(years['1999']);

// This allows a variable to hold a key to check inside the object
let birthYear = 1999;
console.log(years[birthYear]);
// Below dot notation will not work
// years.birthYear

// You can change and create objects key-values
const midterms = {danielle:96,thomas:78};
console.log(midterms.thomas);
midterms.thomas = 85;               // Changes thomas value to 85
console.log(midterms.thomas);
midterms['danielle'] = 90;          // This also changes value
console.log(midterms['danielle']);
midterms.ezra;                      // Creates new Key with Undefined Value at end of object
midterms[2] = 80;                   // Can also use index number to call key-value
console.log(midterms[2]);           

// An array of objects
const comments = [
    {username:'Tammy', text:'lololol', votes:9},
    {username:'FishBoi', text:'glub glub', votes:1234}
];
console.log(comments[1].text);          // Gets object at index 1's text key-value
console.log(comments[1]['text']);

