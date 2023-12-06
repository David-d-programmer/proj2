/**
 *  Adding event listening to loop through all buttons
 */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = this.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click",  function () {
            let playerOption = this.getAttribute("data-option");
            playGame(playerOption);
        });
    }
})