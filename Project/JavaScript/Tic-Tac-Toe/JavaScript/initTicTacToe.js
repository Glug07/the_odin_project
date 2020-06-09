(function (rows) {
    const tictactoeInit = (function() {
        function init() {
            cacheDom();
            if (isNaN(rows) || rows.length === 0 || rows < 3)
                rows = 3;
            createRows(rows);
            createCols(rows);
        }

        function cacheDom() {
            grid = document.getElementById('tic-tac-toe-board-id');
            gridRows = document.getElementsByClassName("rowsGrid");
        }

        function createEleClass(typeName, className) {
            const cell = document.createElement(typeName);
            cell.className = className;
            return (cell);
        }

        function addStyle(element, property, propertyValue) {
            element.style[property] = propertyValue;
        }

        function createRows(rows) { // init rows
            addStyle(grid, 'gridTemplateRows', `repeat(${rows}, ${(100 / rows) - 2}%)`);
            addStyle(grid, 'row-gap', '2%');
            for (let r = 0; r < rows; r++) {
                const child = createEleClass('div', 'rowsGrid');
                grid.appendChild(child);
            }
        }

        function createCols(cols) { //create cols and associate to rows
            for (let r = 0; r < gridRows.length; r++) {
                addStyle(gridRows[r], 'gridTemplateColumns', `repeat(${cols}, ${(100 / cols) - 2}%)`);
                addStyle(gridRows[r], 'column-gap', '2%');
                for (let c = 0; c < cols; c++) {
                    const child = createEleClass('div', 'cell');
                    gridRows[c].appendChild(child);
                }
            }
        }
        return {
            init: init
        };
    })();

    tictactoeInit.init();
})(prompt('A square of how many rows do you want ?'));