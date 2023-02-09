// const newRow = document.getElementById("grid")




let mainSection = document.getElementById("main-section")
let tableElement = document.getElementsByTagName("table")[0]
const board = [
        [undefined, undefined, undefined], 
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
    ];

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

