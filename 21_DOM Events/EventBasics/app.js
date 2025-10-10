// Button connects to html id='v2'
const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("YOU CLICKED ME!");
    console.log("I HOPE IT WORKED!!");
};

function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!");
};

btn.onmouseenter = scream;      // Does not use () because it only runs when the button is hovered over

// Alert pops up when the first h1 tag is clicked
// onclick references a function so it needs the () => {} statement
document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!');
};

// Button conects to html id='v3'
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("CLICKED!");
});


// Functions to output to console
function twist() {
    console.log("TWIST!");
};
function shout() {
    console.log("SHOUT!");
};
// Grabs first html id='tas' and assigns element to variable tasButton
const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;

// Adds above functions as events to run when clicked
tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);
