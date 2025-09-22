let xTurn = true;
let turn = 0;
let winner = false;

function changeMark(buttonID) {

    if (winner)
        return;

    let currentMark = document.getElementById(buttonID).innerHTML;

    if (!currentMark) {
        if (xTurn) {
            document.getElementById(buttonID).innerHTML = "&#x1F427;";
        }
        else {
            document.getElementById(buttonID).innerHTML = "&#x1FAA8;";
        }

        xTurn = !xTurn;
        turn++;
        checkWin();
    }
}

function checkWin() {
    // read cells
    let q1 = document.getElementById("q1").innerHTML;
    let w1 = document.getElementById("w1").innerHTML;
    let e1 = document.getElementById("e1").innerHTML;
    let q2 = document.getElementById("q2").innerHTML;
    let w2 = document.getElementById("w2").innerHTML;
    let e2 = document.getElementById("e2").innerHTML;
    let q3 = document.getElementById("q3").innerHTML;
    let w3 = document.getElementById("w3").innerHTML;
    let e3 = document.getElementById("e3").innerHTML;

    if (turn >= 5) { //cant happen before turn 6
        switch (true) {
            // rows
            case (q1 && q1 === w1 && w1 === e1):
                document.getElementById('winnerHeader').innerHTML = "Winner: " + q1;
                winner = true;
                break;
            case (q2 && q2 === w2 && w2 === e2):
                document.getElementById('winnerHeader').innerHTML = "Winner: " + q2;
                winner = true;
                break;
            case (q3 && q3 === w3 && w3 === e3):
                document.getElementById('winnerHeader').innerHTML = "Winner: " + q3;
                winner = true;
                break;

            // columns
            case (q1 && q1 === q2 && q2 === q3):
                document.getElementById('winnerHeader').innerHTML = "Winner: " + q1;
                winner = true;
                break;
            case (w1 && w1 === w2 && w2 === w3):
                document.getElementById('winnerHeader').innerHTML = "Winner: " + w1;
                winner = true;
                break;
            case (e1 && e1 === e2 && e2 === e3):
                document.getElementById('winnerHeader').innerHTML = "Winner: " + e1;
                winner = true;
                break;

            // diagonals
            case (q1 && q1 === w2 && w2 === e3):
                document.getElementById('winnerHeader').innerHTML = "Winner: " + q1;
                winner = true;
                break;
            case (e1 && e1 === w2 && w2 === q3):
                document.getElementById('winnerHeader').innerHTML = "Winner: " + e1;
                winner = true;
                break;
        }

    }

    if (!winner && turn == 9) {
        document.getElementById('winnerHeader').innerHTML = "Draw";

    }
}

function reset() {
    // clear all cells
    document.getElementById("q1").innerHTML = "";
    document.getElementById("w1").innerHTML = "";
    document.getElementById("e1").innerHTML = "";
    document.getElementById("q2").innerHTML = "";
    document.getElementById("w2").innerHTML = "";
    document.getElementById("e2").innerHTML = "";
    document.getElementById("q3").innerHTML = "";
    document.getElementById("w3").innerHTML = "";
    document.getElementById("e3").innerHTML = "";
    document.getElementById('winnerHeader').innerHTML = "No Winner Yet";

    // reset variables
    turn = 0;
    xTurn = true;
    winner = false;
}
