// Creates button
const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

// Appends jokes to list
const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLI = document.createElement("LI");
    newLI.append(jokeText);
    jokes.append(newLI);
}

// Gets joke from the json using the webpage
const getDadJoke = async () => {
    try {
        const config = { headers: {Accept: 'application/json'}}
        const res = await axios.get("https://icanhazdadjoke.com/", config)
        return res.data.joke;
    } catch (e) {
        return "Error! No jokes available!"
    }
}

// Adds new joke on button click
button.addEventListener("click", addNewJoke)