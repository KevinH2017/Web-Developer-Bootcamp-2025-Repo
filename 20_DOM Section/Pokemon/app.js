// Pokemon API to get sprites from: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// Grabs all sprites from the Pokemon API
const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

// Goes through all pokemon sprites and creates a div, span, and image for each one
for (let i = 1; i <= 1017; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    // Gets sprite from above link and appending baseURL with corresponding .png number for that pokemon
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`;

    // Creates a child element containing each image and pokemon number, into pokemon container
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
};
