const button = document.querySelector('button');
const h1 = document.querySelector('h1');

// When user clicks the button a random color is used as the background
button.addEventListener('click', function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

/**
 * @returns Randomly generates RGB values.
 */
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

