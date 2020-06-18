import { events } from './pubsub.js';

const render = (function() {

    events.on('render', _render);

    function createEleClass(typeName, className) { //create an element with a class
        const cell = document.createElement(typeName);
        cell.className = className;
        return (cell);
    }

    function _deleteAllChildren(parentElement) {
        let firstChild = parentElement.firstElementChild;

        while (firstChild) {
            firstChild.remove();
            firstChild = parentElement.firstElementChild
        }
    }

    function _renderLibraryList(classObject, element) {
        classObject.forEach(e => {
            let divElement = document.createElement('div');
            divElement.innerHTML = `${e.author} ${e.title} ${e.pageNumber} ${e.isRead}`;
            element.appendChild(divElement);
            const readButton = createEleClass('button', 'read-book-button-id');
            const deleteButton = createEleClass('button', 'delete-book-button-id');
            element.appendChild(readButton);
            element.appendChild(deleteButton);
        });
    }

    function _render(myLibrary, dom) {
        _deleteAllChildren(dom.libraryList);
        _renderLibraryList(myLibrary, dom.libraryList);
    }
})();

export { render };