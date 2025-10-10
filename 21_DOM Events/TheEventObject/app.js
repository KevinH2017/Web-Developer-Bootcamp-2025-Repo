// Javascript keycodes for keyboard input: https://www.toptal.com/developers/keycode/table

// Outputs to console the event of the button being clicked
document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt);
});

// const input = document.querySelector('input');
// input.addEventListener('keydown', function (e) {
//     console.log(e.key)
//     console.log(e.code)
// })
// input.addEventListener('keyup', function () {
//     console.log("KEYUP")
// })

// Listens for when a key is pressed and outputs if it was a corresponding arrow key
// switch-case checks for what event is being passed and connects it to the correct console output
// default is used if no other case is matched
window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break
        default:
            // console.log(e.key);             // e.key shows the actual key from the key board
            console.log(e.code);            // e.code shows the keyboard code in javascript it corresponds to
    }
});