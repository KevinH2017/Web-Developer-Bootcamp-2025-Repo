const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total)

// const total = prices.reduce((total, price) => {
//     return total + price
// })

// Total sum of prices array
const total = prices.reduce((total, price) => total + price);
console.log(total);

// Finds the lowest value in prices array
const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
});
console.log(minPrice);

// Finds the highest value in prices array
const maxPrice = prices.reduce((max, price) => {
    if (price > max) {
        return price;
    }
    return max;
});
console.log(maxPrice);


const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
];

// Returns the array of the highgest rated movie
const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
});
console.log(highestRated);


// We can provide an initial value as the 2nd arg to reduce:
const evens = [2, 4, 6, 8];
// Keeps adding the array into one large sum
console.log(evens.reduce((sum, num) => sum + num));          //20
// Starts at 100 and keeps adding to the array into one large sum
console.log(evens.reduce((sum, num) => sum + num, 100));     //120
