import { events } from './pubsub.js';
import { render } from './rendering.js';


(function (firstPlayerName, secondPlayerName) {
    const Player = (name, symbol, playerNumber) => {
        if (name === "")
            name = "Player " + playerNumber;

        //let _score = 0;
        let _name = name;
        let _symbol = symbol;

        // const setScore = (score) => {
        //     _score = score;
        // }
        const getName = () => _name;
        const getSymbol = () => _symbol;
        //const getScore = () => _score;

        return {getName, getSymbol};
    };

    const tictactoeGame = (function () {
        //game variables
        let players = []; //player list
        let actualPlayer;
        let gameBoardArray;

        function init() {
            _initGameBoardArray();
            _fillGameBoardArray(' ');
            _addPlayer(Player(firstPlayerName, 'x', 1));
            _addPlayer(Player(secondPlayerName, 'o', 2));
            actualPlayer = players[0]; //the first round is for the first player
        };

        const dom = (function() { //Init dom variables
            let _cells;
            let _names;
            let _symbols;
            //let _scores;
            let _gameBoard;

            (function() {
                _cells = document.getElementsByClassName("cell");
                _names = document.getElementsByClassName("player-name");
                _symbols = document.getElementsByClassName("player-symbol");
                //_scores = document.getElementsByClassName("player-score");
                _gameBoard = document.getElementById("tic-tac-toe-board-id");
            })();

            function getCells() { return (_cells); };
            function getNames() { return (_names); };
            function getSymbols() { return (_symbols); };
            //function getScores() { return (_scores); };
            function getGameBoard() { return (_gameBoard); };
            return {
                getCells: getCells,
                getNames: getNames,
                getSymbols: getSymbols,
                //getScores: getScores,
                getGameBoard: getGameBoard
            };
        })();

        function _createArray(length) {
            let arr = new Array(length || 0), i = length;

            if (arguments.length > 1) {
                let args = Array.prototype.slice.call(arguments, 1);

                while (i--) {
                    arr[length - 1 - i] = _createArray.apply(this, args);
                }
            }
            return arr;
        }

        function _initGameBoardArray() {
            gameBoardArray = _createArray(dom.getGameBoard().childElementCount, dom.getGameBoard().childElementCount);
        }

        function _fillGameBoardArray(fillValue) {
            gameBoardArray = gameBoardArray.map(element => element.fill(fillValue));
        }

        function _fillIndexGameBoardArray(xPos, yPos, fillValue) {
            gameBoardArray[xPos][yPos] = fillValue;
        }

        function _addPlayer(player) {
            players.push(player);
            events.emit('render', players, dom, gameBoardArray);
        }

        function _findElePos(element, elementList) {
            for (const e in elementList) {
                if (elementList[e] === element) {
                    return (+e);
                }
            }
            return (-1);
        }

        function _changeActualPlayer() {
            if (actualPlayer === players[0])
                actualPlayer = players[1]
            else
                actualPlayer = players[0]
        }

        function _checkRowLine(gameBoardArray, rowLength, colLength) {
            let symbol;

            for (let r = 0; r < rowLength; r++) {
                for (let c = 1; c < colLength - 1; c++) {
                    symbol = gameBoardArray[r][c];
                    if (symbol === ' ');
                    else if (gameBoardArray[r][c - 1] === symbol && gameBoardArray[r][c + 1] === symbol)
                        alert(actualPlayer.getName() + " won the game!");
                }
            }
        }

        function _checkColLine(gameBoardArray, rowLength, colLength) {
            let symbol;

            for (let c = 0; c < colLength; c++) {
                for (let r = 1; r < rowLength - 1; r++) {
                    symbol = gameBoardArray[r][c];
                    if (symbol === ' ');
                    else if (gameBoardArray[r - 1][c] === symbol && gameBoardArray[r + 1][c] === symbol) {
                        alert(actualPlayer.getName() + " won the game!");
                        document.location.reload(true);
                    }
                }
            }
        }

        function _checkDiagLine(gameBoardArray, rowLength, colLength) {
            let symbol;

            for (let c = 1; c < colLength - 1; c++) {
                for (let r = 1; r < rowLength - 1; r++) {
                    symbol = gameBoardArray[r][c];
                    if (symbol === ' ');
                    else if (gameBoardArray[r - 1][c - 1] === symbol && gameBoardArray[r + 1][c + 1] === symbol)
                        alert(actualPlayer.getName() + " won the game!");
                    else if (gameBoardArray[r - 1][c + 1] === symbol && gameBoardArray[r + 1][c - 1] === symbol) {
                        alert(actualPlayer.getName() + " won the game!");
                        document.location.reload(true);
                    }
                }
            }
        }

        function _checkGame() {
            _checkRowLine(gameBoardArray, gameBoardArray.length, gameBoardArray[0].length);
            _checkColLine(gameBoardArray, gameBoardArray.length, gameBoardArray[0].length);
            _checkDiagLine(gameBoardArray, gameBoardArray.length, gameBoardArray[0].length);
        }

        function _gameBoardClick(element) {
            element = element || window.event;

            let target = element.target || element.srcElement;
            let text = target.textContent || target.innerText;
            const parentNode = target.parentNode;

            const xPos = _findElePos(parentNode, dom.getGameBoard().children);
            if (xPos == -1) {
                console.log("Error x");
                return (-1);
            }
            const yPos = _findElePos(target, (dom.getGameBoard().children)[xPos].children);
            if (yPos == -1) {
                console.log("Error y");
                return (-1);
            }
            _fillIndexGameBoardArray(xPos, yPos, actualPlayer.getSymbol());
            events.emit('render', players, dom, gameBoardArray);
            _checkGame();
            _changeActualPlayer();
        }

        for (let c = 0, cells = dom.getCells(); c < cells.length; c++) {
            cells[c].addEventListener('click', function (element) {
                _gameBoardClick(element);
            });
        }

        return {
            init: init,
        };
    })();

    tictactoeGame.init();

})(prompt('Type the name of the first player :)'), prompt('Type the name of the second player :)'));