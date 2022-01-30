let playerOne = true;
const playerOneSymbol = "X";
const playerTwoSymbol = "O";


function selectBox(box) {

    let selectedBox = document.getElementById(box);

    // Draw only if box is empty
    if (selectedBox.innerHTML == "") {
        if (playerOne) {
            // Draw player symbol
            selectedBox.innerHTML = playerOneSymbol;
            playerOne = false;
            // change player
            document.getElementById("message").innerHTML = "Spieler O"
            document.getElementById("message").style.color = "red"; 
        } else {
            // Draw player symbol
            selectedBox.innerHTML = playerTwoSymbol;
            // make symbol red 
            selectedBox.style.color = "red";
            // change player
            playerOne = true;
            document.getElementById("message").innerHTML = "Spieler X"
            document.getElementById("message").style.color = "white"; 
        }
    }

}

