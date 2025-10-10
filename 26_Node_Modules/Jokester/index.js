// Gets packages give-me-a-joke and colors found in local folder node_modules
const jokes = require("give-me-a-joke");
const colors = require("colors");

// Outputs a random joke with rainbow colored text
jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
});