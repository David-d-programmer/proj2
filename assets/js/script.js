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
const images = ["ROCK.png", "PAPER.png", "SCISSORS.png", "LIZARD.png", "SPOCK.png"];

const COMPUTER_WIN = "cwin";
const PLAYER_WIN = "pwin";
const DRAW = "draw";

const MAX_SCORE = 5;

/**
 *  Adding event listening to loop through all buttons
 */

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerOption = this.getAttribute("data-option");
        playGame(playerOption);

    });
}


/**
 * The main game function. it accepts the data-option of selected button
 */
function playGame(playerOption) {
    playerOption = options[playerOption];
    var computerOption = Math.floor(Math.random() * 5);
    computerOption = options[computerOption];

    playerImage.src = `assets/images`;
    playerImage.alt = playerOption;

    //alert("The computer chose " + computerOption);

    computerImage.src = `assets/images/${Math.floor(Math.random() * 5)}`;
    computerImage.alt = computerOption;

    var result = compare(computerOption, playerOption);

    updateScores(result);
}

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

function updateScores(result) {
    if (result == DRAW) {
        return;
    }

    let oldScore = 0;

    if (result == PLAYER_WIN) {
        //incrementing player scores
        oldScore = parseInt(document.getElementById("player-score").innerText);
        document.getElementById("player-score").innerText = ++oldScore;
    } else {
        //incrementing computer scores
        oldScore = parseInt(document.getElementById("computer-score").innerText);
        document.getElementById("computer-score").innerText = ++oldScore;
    }
    // this display the message in the message div
    if (oldScore == MAX_SCORE) {
        if (result == PLAYER_WIN) {
            document.getElementById("messages").innerText = "PLAYER WINS";
        } else {
            document.getElementById("messages").innerText = "COMPUTER WINS";
        }

    }
}


