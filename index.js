// const newRow = document.getElementById("grid")



// function makeContainer () {
//     console.log("test")
//     let rowsNeeded = 6
//     while (rowsNeeded >= 1){
//         let newElement = document.createElement("div")
//         newElement.textContent = "text"
//         newRow.prepend(newElement)
//         newElement.classList.add("rowFlex")
//         rowsNeeded--

//     }
//     newRow.style.display = "flex"
// }

// makeContainer()
let mainSection = document.getElementById("main-section")
let tableElement = document.getElementsByTagName("table")[0]
const board = [];

function buildGameBoard() {
    for (let rowsSoFar = 0; rowsSoFar < 6; rowsSoFar++) {
        board.push([rowsSoFar])

        let newBoardRow = document.createElement("tr");

        newBoardRow.classList.add("boardRow")
        newBoardRow.classList.add(rowsSoFar)

        for (columnsSoFar = 0; columnsSoFar < 1; columnsSoFar++) {
            let newBoardColumn = document.createElement("td")
            newBoardColumn.classList.add("boardColumn")
            newBoardColumn.classList.add(columnsSoFar)

            newBoardRow.appendChild(newBoardColumn)
        }

        tableElement.appendChild(newBoardRow)
    }
    
}






window.addEventListener("DOMContentLoaded", buildGameBoard)

