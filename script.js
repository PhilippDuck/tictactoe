"use strict"

let playerOne = true;
const playerOneSymbol = "X";
const playerTwoSymbol = "O";

// possibilities to win
const wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [2,4,6],
    [0,4,8]
]

function selectBox(box) {

    let selectedBox = document.getElementById(box);
    let symbol = ""

    // Draw only if box is empty
    if (selectedBox.innerHTML == "") {
        if (playerOne) {
            // Draw player symbol
            selectedBox.innerHTML = playerOneSymbol;
            symbol = playerOneSymbol;
            playerOne = false;
            // change player
            document.getElementById("message").innerHTML = "Spieler O";
            document.getElementById("message").style.color = "red"; 
        } else {
            // Draw player symbol
            selectedBox.innerHTML = playerTwoSymbol;
            symbol = playerTwoSymbol;
            // make symbol red 
            selectedBox.style.color = "red";
            // change player
            playerOne = true;
            document.getElementById("message").innerHTML = "Spieler X";
            document.getElementById("message").style.color = "white"; 
        }
    }
    checkWin(symbol);

}

function checkWin(symbol) {
    console.log("Check.");
    wins.forEach(win => {
        let result = [];
        win.forEach(element => {
            result[element] = document.getElementById("box" + element).innerHTML 
        });
        console.log(result);
        let row = ""
        result.forEach(e => {
            row += e;
        });
        console.log(row);
        if (row === "XXX" || row === "OOO") {
            console.log("WIN");
            document.getElementById("message").innerHTML = "Spieler " + symbol + " hat gewonnen!";
            document.getElementById("message").style.color = "orange";
            win.forEach(box => {
                document.getElementById("box" + box).style.backgroundColor = "orange";
            });
            return true;
        }
    });

}

