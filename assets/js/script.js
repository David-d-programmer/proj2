/**
 * Declare constants for DOM elements other options
 */

const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const options = ["rock", "paper", "scissors", "lizard", "spock"];

const COMPUTER_WIN = "cwin";
const PLAYER_WIN = "pwin";
const DRAW = "draw";

const OPTION_IMAGES = {
    rock: "assets/images/ROCK.png",
    paper: "assets/images/PAPER.png",
    scissors: "assets/images/SCISSORS.png",
    lizard: "assets/images/LIZARD.png",
    spock: "assets/images/SPOCK.png",
};

const MAX_SCORE = 5;




/**
 * The main game function. it accepts the data-option of selected button
 */
function playGame(playerOption) {
    playerOption = options[playerOption];
    renderUserSelection(playerOption, true);

    var computerOption = Math.floor(Math.random() * 5);
    computerOption = options[computerOption];
    renderUserSelection(computerOption, false);



    var result = compare(computerOption, playerOption);

    updateScores(result);
    checkWinner();
    resetGame();
}

function renderUserSelection(selection, player) {
    let userImageElement = player ? playerImage : computerImage;
    let selectionImage = OPTION_IMAGES[selection];
    userImageElement.src = selectionImage;
    userImageElement.alt = selection;
}
/**
 * comparing the computer option and the player option
 */
var compare = function (computerOption, playerOption) {

    if (computerOption === playerOption) {
        return DRAW;
    }
    else if (computerOption === "rock") {
        if (playerOption === "scissors") {
            return COMPUTER_WIN;
        } else if (playerOption === "paper") {
            return PLAYER_WIN;
        } else if (playerOption === "lizard") {
            return COMPUTER_WIN;
        } else if (playerOption === "spock") {
            return PLAYER_WIN;
        }
    }

    else if (computerOption === "paper") {
        if (playerOption === "scissors") {
            return PLAYER_WIN;
        } else if (playerOption === "rock") {
            return COMPUTER_WIN;
        } else if (playerOption === "lizard") {
            return PLAYER_WIN;
        } else {
            return COMPUTER_WIN;
        }
    }

    else if (computerOption === "scissors") {
        if (playerOption === "paper") {
            return COMPUTER_WIN;
        } else if (playerOption === "rock") {
            return PLAYER_WIN;
        } else if (playerOption === "lizard") {
            return COMPUTER_WIN;
        } else {
            return PLAYER_WIN;
        }
    }

    else if (computerOption === "lizard") {
        if (playerOption === "scissors") {
            return COMPUTER_WIN;
        } else if (playerOption === "rock") {
            return PLAYER_WIN;
        } else if (playerOption === "paper") {
            return COMPUTER_WIN;
        } else {
            return COMPUTER_WIN;
        }
    }

    else if (computerOption === "spock") {
        if (playerOption === "scissors") {
            return COMPUTER_WIN;
        } else if (playerOption === "rock") {
            return COMPUTER_WIN;
        } else if (playerOption === "lizard") {
            return PLAYER_WIN;
        } else {
            return PLAYER_WIN;
        }
    }
};
/**
 * This is where the score is updated
 */
function updateScores(result) {
    if (result == DRAW) {
        return;
    }

    let oldScore = 0;

    if (result == PLAYER_WIN) {
        /**
         * incrementing player scores
         */
        oldScore = parseInt(document.getElementById("player-score").innerText);
        document.getElementById("player-score").innerText = ++oldScore;
    } else {
        /**
         * incrementing computer scores
         */
        oldScore = parseInt(document.getElementById("computer-score").innerText);
        document.getElementById("computer-score").innerText = ++oldScore;
    }
    // this display the message in the message div

}

function checkWinner() {
    let playerScore = parseInt(document.getElementById("player-score").innerText);
    let computerScore = parseInt(document.getElementById("computer-score").innerText);

    let gameComplete = false;
    if (playerScore == MAX_SCORE) {
        document.getElementById("messages").innerText = "YOU WIN";
        gameComplete = true;
    } else if (computerScore == MAX_SCORE) {
        document.getElementById("messages").innerText = "COMPUTER WINS";
        gameComplete = true;
    }

    if (gameComplete) {
        setTimeout(resetGame, 6000);
    }
}

function resetGame() {
    document.getElementById("messages").innerText = "";
    document.getElementById("player-score").innerText = "0";
    document.getElementById("computer-score").innerText = "0";
}



document.addEventListener("DOMContentLoaded", function () {
    /**
     * Adding event listening to loop through all buttons
     */
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerOption = this.getAttribute("data-option");
            playGame(playerOption);

        });
    }
});

