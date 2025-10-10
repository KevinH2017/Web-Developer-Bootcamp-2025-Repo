// Below 3 add functions DO THE SAME THING
// const add = function(x,y) {
//     return x + y;
// }
// function add(a, b) {
//     return a + b;
// }
// const add = (x, y) => {
//     return x + y;
// }


const text = ['rolf', 'lol', 'omg', 'ttyl'];
const caps = text.map(function (t) {
    return t.toUpperCase();             // Returns as a list
})
console.log(text);
console.log(caps);


// ARROW FUNCTIONS, helps to create functions more syntactically compact
// add function will take arguments a and b

const add = (a, b) => a + b;
console.log(`a + b = ${add(2,3)}`);


// square function will take num arguement
const square = num => {
    return num * num;
}
console.log(`Squared is ${square(2)}`);


// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

// rollDie does not need an arguement to run, does not need a return 
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)
console.log(rollDie());



const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })


// IMPLICIT RETURN, you do not need to specifiy keyword return, it automatically does it for you
// Only works when a SINGLE OUTPUT is clearly returned
const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))
console.log(newMovies);
// Iterates through the list
for (let i = 0; i < newMovies.length; i++) {
    console.log(newMovies[i]);
}


