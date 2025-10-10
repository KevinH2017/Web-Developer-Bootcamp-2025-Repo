// Player object to hold score, button, and display
const player1 = {
    score: 0,
    button : document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display"),
}

const player2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display"),
}

const resetButton = document.querySelector("#reset");
const playTo = document.querySelector("#playTo");

let winningScore = 3;
let isGameOver = false;

// Generic function to update scores and buttons
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
};

// Allows user to add to score until winningScore is matched
player1.button.addEventListener('click', function () {
    updateScores(player1, player2);
});
player2.button.addEventListener('click', function () {
    updateScores(player2, player1);
});

// Changes winningScore to different value
playTo.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetBoard();
});

// Resets scoreboard
resetButton.addEventListener('click', resetBoard); 

function resetBoard() {
    isGameOver = false;
    for (let player of [player1,player2]) {
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove('has-text-success', 'has-text-danger');
        player.button.disabled = false;
    }
};

