import { events } from './pubsub.js';

let render = (function () {

    events.on('render', _render);

    function createEleClass(typeName, className) {
        const cell = document.createElement(typeName);
        cell.className = className;
        return (cell);
    }

    function addStyle(element, property, propertyValue) {
        element.style[property] = propertyValue;
    }

    function _renderPlayerSymbol(players, symbols) {
        let s = 0;

        players.forEach(function (player) {
            symbols[s].innerHTML = player.getSymbol();
            s += 1;
        });
    };

    function _renderPlayerName(players, names) {
        let n = 0;

        players.forEach(function (player) {
            names[n].innerHTML = player.getName();
            n += 1;
        });
    };

    function _caseVerification(cell, img) {
        if (cell.children.length == 0) {
            cell.appendChild(img);
        }
    }

    function _renderGameBoard(cells, gameBoardArray) {
        let c = 0;

        gameBoardArray.forEach(arrayRow => {
            arrayRow.forEach(arrayCell => {
                if (arrayCell === 'x') {
                    const img = createEleClass('img', 'img');

                    img.src = '../content/x.png';
                    _caseVerification(cells[c], img);
                } else if (arrayCell === 'o') {
                    const img = createEleClass('img', 'img');

                    img.src = '../content/o.png';
                    _caseVerification(cells[c], img);
                }
                c += 1;
            })
        })
    }

    // function _renderPlayerScore(players, scores) {
    //     let s = 0;

    //     players.forEach(player => {
    //         scores[s].innerHTML = player.getScore();
    //         s += 1;
    //     });
    // }

    function _render(...args) {
        let players = args[0];
        let domPage = args[1];
        let gameBoardArray = args[2];

        _renderPlayerName(players, domPage.getNames());
        _renderPlayerSymbol(players, domPage.getSymbols());
        _renderGameBoard(domPage.getCells(), gameBoardArray);
        //_renderPlayerScore(players, domPage.getScores());
    };

})();

export { render };