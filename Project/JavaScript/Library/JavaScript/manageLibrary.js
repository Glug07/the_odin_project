import { events } from './pubsub.js';
import { render } from './rendering.js';

function findElePos(element, elementList) {
    for (const e in elementList) {
        if (elementList[e] === element) {
            return (+e);
        }
    }
    return (-1);
}

(function () {
    let myLibrary = [];

    class Book {
        #author;
        #title;
        #pageNumber;
        #isRead;

        constructor(author, title, pageNumber, isRead) {
            this.#author = author
            this.#title = title;
            this.#pageNumber = pageNumber;
            this.#isRead = !(String(isRead) == "false"); // when it's not explicitly false it will be true
        }
        get author() { return this.#author; }
        get title() { return this.#title; }
        get pageNumber() { return this.#pageNumber; }
        get isRead() { return this.#isRead; }
        set isRead(isRead) { return this.#isRead = isRead; }
    }
    myLibrary.push(new Book("JKR", "Harry Potter 4", 600, "true"));
    myLibrary.push(new Book("Erin Hunter", "La Guerre Des Clans", 350, "true"));

    class Dom { //Init dom variables
        #libraryList;
        #deleteBookButton;
        #readBookButton;
        #createBookButton;

        constructor() {
            this.#libraryList = document.getElementById('list-id');
            this.#deleteBookButton = document.getElementsByClassName('delete-book-button-id');
            this.#readBookButton = document.getElementsByClassName('read-book-button-id');
            this.#createBookButton = document.getElementById('create-book-button-id');
        }
        get libraryList() { return this.#libraryList; }
        get deleteBookButton() { return this.#deleteBookButton; }
        get readBookButton() { return this.#readBookButton; }
        get createBookButton() { return this.#createBookButton; }
    };

    const libraryManaging = (function () {
        const dom = new Dom();
        events.emit('render', myLibrary, dom);

        (function () { //anonymous function for event/click managing
            dom.createBookButton.addEventListener('click', () => {
                const authorName = prompt("What's the author's name ?", "rien");
                const bookName = prompt("What's the book's name ?", "rien");
                const bookPage = prompt("How many pages there is ?", "rien");
                const isRead = prompt("Did you read this book ?", "rien");

                myLibrary.push(new Book(authorName, bookName, bookPage, isRead));
                events.emit('render', myLibrary, dom);
            })
            window.addEventListener('click', (element) => {
                element = element || window.event;
                let target = element.target || element.srcElement;
                let index = -1;

                for (const element in dom.readBookButton) {
                    if (dom.readBookButton[element] == target) {
                        index = element;
                    }
                }
                if (index != -1) {
                    if (myLibrary[index].isRead == true)
                        myLibrary[index].isRead = false;
                    else
                        myLibrary[index].isRead = true;
                        events.emit('render', myLibrary, dom);
                    }
                index = -1;
                for (const element in dom.deleteBookButton) {
                    if (dom.deleteBookButton[element] == target)
                        index = element;
                }
                if (index != -1) {
                    myLibrary.splice(index, 1);
                    events.emit('render', myLibrary, dom);
                }
            })
            // if (myLibrary[index].isRead.bind(myLibrary[index]) == true)
            //     console.table(myLibrary[index]);
            // //myLibrary[index].isRead(false).bind(myLibrary[index]);
            // else
            //     myLibrary[index].isRead(true);
        })();
    })();
    // dom.createBookButton.addEventListener('click', createBook);
    // dom.createBookButton.addEventListener('click', createBook);
})();
// library.appendChild(document.createElement("div"));
