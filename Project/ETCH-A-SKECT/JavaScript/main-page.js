const grid = document.querySelector("#container");
const body = document.querySelector("body");
let btn = document.createElement("button");
btn.textContent = "RESET";
btn.style.color = "cyan";
let gridRows = document.getElementsByClassName("rowsGrid");
let gridCells = document.getElementsByClassName("cell");

body.appendChild(btn);

gridCreation(prompt("How many rows ?"), prompt("How many cols ?"));

function gridCreation(rows, cols) {
    createRows(rows);
    createCols(cols);
}

function createRows(rows) {
    grid.style.gridTemplateRows = `repeat(${rows},${(960 / rows) - 2}px)`;
    grid.style.gap = "2px 0px";
    //grid.style.gap = "2px 2px";

    for (let r = 0; r < rows; r++) {
        const row = document.createElement("div");
        row.className = "rowsGrid";
        grid.appendChild(row);
    }
}

function createCols(cols) {
    for (let r = 0; r < gridRows.length; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            gridRows[r].appendChild(cell);
            gridRows[r].style.gridTemplateColumns = `repeat(${cols},${(960 / cols) - 2}px)`
            gridRows[r].style.gap = "0px 2px";
        }
    }
}

function randomizeValue(smallestValue, biggestValue) { // biggestValue exclude from possibilities
    let randomValue = Math.random() * (biggestValue - smallestValue);
    randomValue = Math.floor(randomValue) + smallestValue;
    return (randomValue);
}

function changeHoveringEle(event) {
    let randomValue = randomizeValue(0, 5);

    switch(randomValue) {
        case 0:
            color = "blue";
            break;
        case 1:
            color = "green";
            break;
        case 2:
            color = "red";
            break;
        case 3:
            color = "yellow";
            break;
        case 4:
            color = "purple";
            break;
    }
    if (!event.target.getAttribute("style"))
        event.target.style = `background-color: ${color};`;
    // else
    //     event.target.style = none;
}


for (let c = 0; c < gridCells.length; c++) {
    gridCells[c].addEventListener("mouseenter", (event) => changeHoveringEle(event));
}

function clearGrid(event) {
    for (let c = 0; c < gridCells.length; c++) {
        gridCells[c].style = "none";
    }
}

btn.addEventListener("click", (event) => clearGrid(event));

Array.from(gridCells).forEach(
    function(cell) {
});

// mouseover

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

