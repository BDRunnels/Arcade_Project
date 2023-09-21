let mainSection = document.getElementById("main-section")
let tableElement = document.getElementsByTagName("table")[0]
let board = [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
    ];
let startGame = document.getElementById("startGame")
let playerOneName = document.getElementById("playerOne")
let playerTwoName = document.getElementById("playerTwo")
let playerOneScore = document.getElementById("playerOneScore")
let playerTwoScore = document.getElementById("playerTwoScore")
let scoreKeeping = document.getElementById("scoreKeeping")
let scoreX = 0
let scoreO = 0
let newButton = document.getElementById("newButton")



function whoMovesFirst (namePrompt, namePrompt2) {
    let randomNum = Math.random()
    console.log(randomNum)
    // alert("Who Moves First?")
    if (randomNum >= .5) {
        alert(namePrompt + " Moves First!")
        playerOneName.classList.add("first")
        // playerTwoName.classList.add("second")
    } else {
        alert(namePrompt2 + " Moves First!")
        playerTwoName.classList.add("first")
        // playerOneName.classList.add("second")
    }
}


function buildGameBoard () {
    for (let i = 0; i < board.length; i++) {
        let newBoardCell = document.createElement("div");

        newBoardCell.classList.add("row");
        newBoardCell.classList.add(i)

        tableElement.appendChild(newBoardCell);

        for (let nestedI = 0; nestedI < board[i].length; nestedI++) {
            let nestedElement = board[i][nestedI];
            let newNestedCell = document.createElement("div")
            console.log(nestedElement)

            newNestedCell.classList.add(nestedI)
            newNestedCell.classList.add("nested")
            // newNestedCell.classList.add(nestedElement)
            
            newBoardCell.appendChild(newNestedCell)

            
        }
    }

}


window.addEventListener("DOMContentLoaded", buildGameBoard)

// let namePrompt = prompt("Player (X) Name") asks for name before website loads (variables not available?)
// let namePrompt2 = prompt("Player (O) Name")
function startGameFunction () {
    let namePrompt = prompt("Player (X) Name") //asks for name after website loads.
    let namePrompt2 = prompt("Player (O) Name")
    
    if (namePrompt !== undefined) {
        playerOneName.textContent = namePrompt + " (X)"
        // playerOneName.style.textDecoration = "underline"
        // playerOneName.style.border = "2px solid white"

    } 
    if (namePrompt2 !== undefined) { 
        playerTwoName.textContent = namePrompt2 + " (O)"
        // playerTwoName.style.textDecoration = "underline"
        // playerTwoName.style.border = "2px solid white"
    } 

    tableElement.style.visibility = "visible"

    
    
    whoMovesFirst(namePrompt, namePrompt2)
    scoreKeeping.style.visibility = "visible";
    newButton.style.visibility = "hidden";
}

function startNewGameFunction () {
    let namePrompt = prompt("Player (X) Name") //asks for name after website loads.
    let namePrompt2 = prompt("Player (O) Name")
    playerOneScore.textContent =  "X Games Won :" + " " + "0"
    playerTwoScore.textContent =  "O Games Won :" + " " + "0"
    scoreX = 0;
    scoreO = 0;
    
    if (namePrompt !== undefined) {
        playerOneName.textContent = namePrompt + " (X)"
        // playerOneName.style.textDecoration = "underline"
        // playerOneName.style.border = "2px solid white"

    } 
    if (namePrompt2 !== undefined) { 
        playerTwoName.textContent = namePrompt2 + " (O)"
        // playerTwoName.style.textDecoration = "underline"
        // playerTwoName.style.border = "2px solid white"
    } 

    let removeDiv1 = document.getElementsByClassName("nested")[0]
    let removeDiv2 = document.getElementsByClassName("nested")[1]
    let removeDiv3 = document.getElementsByClassName("nested")[2]
    let removeDiv4 = document.getElementsByClassName("nested")[3]
    let removeDiv5 = document.getElementsByClassName("nested")[4]
    let removeDiv6 = document.getElementsByClassName("nested")[5]
    let removeDiv7 = document.getElementsByClassName("nested")[6]
    let removeDiv8 = document.getElementsByClassName("nested")[7]
    let removeDiv9 = document.getElementsByClassName("nested")[8]
    
    // let namePrompt = prompt("Player (X) Name") 
    // let namePrompt2 = prompt("Player (O) Name")
    
    // if (namePrompt !== undefined) {
    //     playerOneName.textContent = namePrompt + " (X)"
    // }
    // if (namePrompt2 !== undefined) { 
    //     playerTwoName.textContent = namePrompt2 + " (O)"
    // }
    if (removeDiv1.classList.contains("X")) {
        removeDiv1.classList.remove("X")
    } else {
        removeDiv1.classList.remove("O")
    }

    if (removeDiv2.classList.contains("X")) {
        removeDiv2.classList.remove("X")
    } else {
        removeDiv2.classList.remove("O")
    }

    if (removeDiv3.classList.contains("X")) {
        removeDiv3.classList.remove("X")
    } else {
        removeDiv3.classList.remove("O")
    }

    if (removeDiv4.classList.contains("X")) {
        removeDiv4.classList.remove("X")
    } else {
        removeDiv4.classList.remove("O")
    }

    if (removeDiv5.classList.contains("X")) {
        removeDiv5.classList.remove("X")
    } else {
        removeDiv5.classList.remove("O")
    }

    if (removeDiv6.classList.contains("X")) {
        removeDiv6.classList.remove("X")
    } else {
        removeDiv6.classList.remove("O")
    }

    if (removeDiv7.classList.contains("X")) {
        removeDiv7.classList.remove("X")
    } else {
        removeDiv7.classList.remove("O")
    }

    if (removeDiv8.classList.contains("X")) {
        removeDiv8.classList.remove("X")
    } else {
        removeDiv8.classList.remove("O")
    }

    if (removeDiv9.classList.contains("X")) {
        removeDiv9.classList.remove("X")
    } else {
        removeDiv9.classList.remove("O")
    }
 

    board = [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
    ];
    tableElement.style.visibility = "visible"  
    
    whoMovesFirst(namePrompt, namePrompt2);
    scoreKeeping.style.visibility = "visible";
    newButton.style.visibility = "hidden";
}

startGame.addEventListener("click", startNewGameFunction)


////////////////////////////////////////////////////


function playerMove (clickEvent) {
    // let xMove = clickEvent.target.classList.add("X")
    // let oMove = clickEvent.target.classList.add("O")
    let targetIndexPosition = parseInt(clickEvent.target.parentNode.classList[1])
    let nestedIndexPosition = parseInt(clickEvent.target.classList[0])
    // board[targetIndexPosition] = player1
    // console.log(board)
    // console.log(typeof clickEvent.target.classList[2])
    // console.log(clickEvent.target.parentNode)
    // console.log("This is target:" + targetIndexPosition)
    // console.log("This is nested:" + nestedIndexPosition)
        
    

    if (clickEvent.target.classList.contains("X") || clickEvent.target.classList.contains("O")) {
        // clickEvent.target.style.backgroundColor = "red"
            alert("That Space is Occupied!")
    } else if (playerOneName.classList.contains("first")) {
            clickEvent.target.classList.add("X")
            board[targetIndexPosition][nestedIndexPosition] = "X"
            // board[targetIndexPosition][nestedIndexPosition] = clickEvent.target.classList.add("X")

            playerOneName.classList.remove("first")
            playerTwoName.classList.add("first")
    } else {
            clickEvent.target.classList.add("O")
            board[targetIndexPosition][nestedIndexPosition] = "O"
            // board[targetIndexPosition][nestedIndexPosition] = clickEvent.target.classList.add("O")
            playerTwoName.classList.remove("first")
            playerOneName.classList.add("first")
    } 
    console.log(board)

    checkWin()
    
}


tableElement.addEventListener("click", playerMove)

// HOW TO TARGET BOTH INDEX LOCATIONS IN ARRAY / NESTED ARRAY (parent / child) == (parentNode)

// WINNING CONDITIONS

function checkWin () {
    
    
    
    if ((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") || (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") || (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") || (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") || (board[0][1] == "X" && board[1][1] == "X" && board[2][1] =="X") || (board[0][2] == "X" && board[1][2] == "X" && board[2][2] =="X") || (board[0][0] == "X" && board[1][1] == "X" && board[2][2] =="X") || (board[0][2] == "X" && board [1][1] == "X" && board[2][0] =="X")) {

        if (scoreX === 0) {
            scoreX++
            playerOneScore.textContent =  "X Games Won :" + " " + scoreX
        } else {
            scoreX++
            playerOneScore.textContent = "X Games Won :" + " " + scoreX
        };
         // WHY IS SCORE NOT UPDATING PROPERLY FOR BOTH X & O.
        const message = "Game Over!" + " " + playerOneName.textContent + " " + "wins!"
        alert(message)
        tableElement.style.visibility = "hidden";
        newButton.style.visibility = "visible";
        


        
        
        
        
    } else if ((board[0][0] =="O" && board[0][1] =="O" && board[0][2] =="O") || (board[1][0] =="O" && board[1][1] =="O" && board[1][2] =="O") || (board[2][0] =="O" && board[2][1] =="O" && board[2][2] =="O") || (board[0][0] =="O" && board[1][0] =="O" && board[2][0] =="O") || (board[0][1] =="O" && board[1][1] =="O" && board[2][1]  =="O") || (board[0][2] =="O" && board[1][2] =="O" && board[2][2] =="O") || (board[0][0] =="O" && board[1][1] =="O" && board[2][2]) =="O" || (board[0][2] =="O" && board [1][1] =="O" && board[2][0] =="O")) {
        if (scoreO === 0) {
            scoreO++
            playerTwoScore.textContent = "O Games Won :" + " " + scoreO
        } else {
            scoreO++
            playerTwoScore.textContent = "O Games Won :" + " " + scoreO
        }; // WHY IS SCORE NOT UPDATING PROPERLY FOR BOTH X & O.
        const message2 = "Game Over!" + " " + playerTwoName.textContent + " " + "wins!"
        alert(message2)
        tableElement.style.visibility = "hidden";
        newButton.style.visibility = "visible";
        
        
        


    } else if ((board[0][0] == "X" || board[0][0] == "O") && (board[0][1] == "X" || board[0][1] == "O") && (board[0][2] == "X" || board[0][2] == "O") && (board[1][0] == "X" || board[1][0] == "O") && (board[1][1] == "X" || board[1][1] == "O") && (board[1][2] == "X" || board[1][2] == "O") && (board[2][0] == "X" || board[2][0] == "O") && (board[2][1] == "X" || board[2][1] == "O") && (board[2][2] == "X" || board[2][2]== "O") ) {
        const message3 = "Tie Game!"
        alert(message3)
        tableElement.style.visibility = "hidden";
        newButton.style.visibility = "visible";
    }
}
        
//RESET BUTTON


function resetBoard (event) {
    let removeDiv1 = document.getElementsByClassName("nested")[0]
    let removeDiv2 = document.getElementsByClassName("nested")[1]
    let removeDiv3 = document.getElementsByClassName("nested")[2]
    let removeDiv4 = document.getElementsByClassName("nested")[3]
    let removeDiv5 = document.getElementsByClassName("nested")[4]
    let removeDiv6 = document.getElementsByClassName("nested")[5]
    let removeDiv7 = document.getElementsByClassName("nested")[6]
    let removeDiv8 = document.getElementsByClassName("nested")[7]
    let removeDiv9 = document.getElementsByClassName("nested")[8]
    
    // let namePrompt = prompt("Player (X) Name") 
    // let namePrompt2 = prompt("Player (O) Name")
    
    // if (namePrompt !== undefined) {
    //     playerOneName.textContent = namePrompt + " (X)"
    // }
    // if (namePrompt2 !== undefined) { 
    //     playerTwoName.textContent = namePrompt2 + " (O)"
    // }
    if (removeDiv1.classList.contains("X")) {
        removeDiv1.classList.remove("X")
    } else {
        removeDiv1.classList.remove("O")
    }

    if (removeDiv2.classList.contains("X")) {
        removeDiv2.classList.remove("X")
    } else {
        removeDiv2.classList.remove("O")
    }

    if (removeDiv3.classList.contains("X")) {
        removeDiv3.classList.remove("X")
    } else {
        removeDiv3.classList.remove("O")
    }

    if (removeDiv4.classList.contains("X")) {
        removeDiv4.classList.remove("X")
    } else {
        removeDiv4.classList.remove("O")
    }

    if (removeDiv5.classList.contains("X")) {
        removeDiv5.classList.remove("X")
    } else {
        removeDiv5.classList.remove("O")
    }

    if (removeDiv6.classList.contains("X")) {
        removeDiv6.classList.remove("X")
    } else {
        removeDiv6.classList.remove("O")
    }

    if (removeDiv7.classList.contains("X")) {
        removeDiv7.classList.remove("X")
    } else {
        removeDiv7.classList.remove("O")
    }

    if (removeDiv8.classList.contains("X")) {
        removeDiv8.classList.remove("X")
    } else {
        removeDiv8.classList.remove("O")
    }

    if (removeDiv9.classList.contains("X")) {
        removeDiv9.classList.remove("X")
    } else {
        removeDiv9.classList.remove("O")
    }
 

    board = [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
    ];

    

    // whoMovesFirst(namePrompt, namePrompt2)

    

    tableElement.style.visibility = "visible";
    newButton.style.visibility = "hidden";


    

}

newButton.addEventListener("click", resetBoard)

