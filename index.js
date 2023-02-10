// const newRow = document.getElementById("grid")




let mainSection = document.getElementById("main-section")
let tableElement = document.getElementsByTagName("table")[0]
const board = [
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



// function startGameFunction () {
//     let namePrompt = prompt("Player One Name")
//     let namePrompt2 = prompt("Player Two Name")
    
//     if (namePrompt !== undefined) {
//         playerOneName.innerHTML = namePrompt + " (X)"
//         playerOneName.style.textDecoration = "underline"
//     } 
//     if (namePrompt2 !== undefined) { 
//         playerTwoName.innerHTML = namePrompt2 + " (O)"
//         playerTwoName.style.textDecoration = "underline"
//     }

//     tableElement.style.visibility = "visible"

//     function whoMovesFirst () {
//         let randomNum = Math.random()
//         console.log(randomNum)
//         // alert("Who Moves First?")
//         if (randomNum >= .5) {
//             alert(namePrompt + " Moves First!")
//         } else {
//             alert(namePrompt2 + " Moves First!")
//         }
//     }

//     whoMovesFirst()
// }

// startGame.addEventListener("click", startGameFunction)


// function buildGameBoard() {
//     for (let rowsSoFar = 0; rowsSoFar < board.length; rowsSoFar++) {
//         let currentElement = board[rowsSoFar]
//         // console.log(currentElement)

//         let newBoardRow = document.createElement("div");

//         newBoardRow.classList.add("boardRow")
//         // newBoardRow.classList.add(rowsSoFar)

//         tableElement.appendChild(newBoardRow)

//         for (nestedI = 0; nestedI < currentElement.length; nestedI++) {
//             let nestedElement = currentElement[nestedI]
//             // console.log(nestedElement)
//             let newNested = document.createElement("div");
//             newNested.classList.add("column")
//             newNested.classList.add(nestedI)
            
//             nestedElement.appendChild(newNested)
//     }

        // for (columnsSoFar = 0; columnsSoFar < 1; columnsSoFar++) {
        //     let newBoardColumn = document.createElement("td")
        //     newBoardColumn.classList.add("boardColumn")
        //     newBoardColumn.classList.add(columnsSoFar)

        //     newBoardRow.appendChild(newBoardColumn)
        // }

        
//     }
// } 


function buildGameBoard () {
    for (let i = 0; i < board.length; i++) {
        let newBoardCell = document.createElement("div");

        newBoardCell.classList.add("cell");
        newBoardCell.classList.add(i)

        tableElement.appendChild(newBoardCell);

        for (let nestedI = 0; nestedI < board[i].length; nestedI++) {
            let nestedElement = board[i][nestedI];
            let newNestedCell = document.createElement("div")
            console.log(nestedElement)

            newNestedCell.classList.add(i)
            newNestedCell.classList.add("nested")
            newNestedCell.classList.add(nestedElement)
            
            newBoardCell.prepend(newNestedCell)

            
        }
    }

}


window.addEventListener("DOMContentLoaded", buildGameBoard)

let namePrompt = prompt("Player (X) Name")
let namePrompt2 = prompt("Player (O) Name")
function startGameFunction () {
    // let namePrompt = prompt("Player (X) Name")
    // let namePrompt2 = prompt("Player (O) Name")
    
    if (namePrompt !== undefined) {
        playerOneName.innerHTML = namePrompt + " (X)"
        // playerOneName.style.textDecoration = "underline"
        // playerOneName.style.border = "2px solid white"

    } 
    if (namePrompt2 !== undefined) { 
        playerTwoName.innerHTML = namePrompt2 + " (O)"
        // playerTwoName.style.textDecoration = "underline"
        // playerTwoName.style.border = "2px solid white"
    } 

    tableElement.style.visibility = "visible"

    function whoMovesFirst () {
        let randomNum = Math.random()
        console.log(randomNum)
        // alert("Who Moves First?")
        if (randomNum >= .5) {
            alert(namePrompt + " Moves First!")
            playerOneName.classList.add("first")
            playerTwoName.classList.add("second")
        } else {
            alert(namePrompt2 + " Moves First!")
            playerTwoName.classList.add("first")
            playerOneName.classList.add("second")
        }
    }
    
    whoMovesFirst()
    scoreKeeping.style.visibility = "visible";
}

startGame.addEventListener("click", startGameFunction)

////////////////////////////////////////////////////

