// Bubbling allows events to occur without overlapping each other, allowing users to interact with those objects without issues

const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

// Randomly changes background color
button.addEventListener('click', function (e) {
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation();                // Stops an event from bubbling up the event chain, this stops the hide function from running when button is clicked
});

// Will hide the button when clicked
container.addEventListener('click', function () {
    container.classList.toggle('hide');
});


/**
 * Generates color from random RGB values.
 * @returns RGB values.
 */
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};