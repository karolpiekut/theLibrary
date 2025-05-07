import './style.css'

let id = 0;

function generateApp() {
    const app = document.createElement('div');
    app.setAttribute('id', 'app');
    const menuBar = document.createElement('div');
    menuBar.setAttribute('id', 'menuBar')
    app.appendChild(menuBar);
    const appMainView = document.createElement('div');
    appMainView.setAttribute('id', 'appMainView')
    app.appendChild(appMainView);

    const buttonsSection = document.createElement('div');
    buttonsSection.setAttribute('id', 'buttonsSection');
    menuBar.appendChild(buttonsSection);
    const allButton = document.createElement('button');
    allButton.setAttribute('id', 'allButton');
    allButton.innerText = 'All';
    buttonsSection.appendChild(allButton);
    const booksButton = document.createElement('button');
    booksButton.setAttribute('id', 'booksButton');
    booksButton.innerText = 'Books';
    buttonsSection.appendChild(booksButton);
    const eBooksButton = document.createElement('button');
    eBooksButton.setAttribute('id', 'eBooksButton');
    eBooksButton.innerText = 'eBooks';
    buttonsSection.appendChild(eBooksButton);
    const audiobooksButton = document.createElement('button');
    audiobooksButton.setAttribute('id', 'audiobooksButton');
    audiobooksButton.innerText = 'Audiobooks';
    buttonsSection.appendChild(audiobooksButton);
    const authorsButton = document.createElement('button');
    authorsButton.setAttribute('id', 'authorsButton');
    authorsButton.innerText = 'Authors';
    buttonsSection.appendChild(authorsButton);
    const queueButton = document.createElement('button');
    queueButton.setAttribute('id', 'queueButton');
    queueButton.innerText = 'Queue';
    buttonsSection.appendChild(queueButton);
    const readBooksButton = document.createElement('button');
    readBooksButton.setAttribute('id', 'readBooksButton');
    readBooksButton.innerText = 'Read Books';
    buttonsSection.appendChild(readBooksButton);

    const addBooksSection = document.createElement('div')
    addBooksSection.setAttribute('id', 'addBooksSection');
    menuBar.appendChild(addBooksSection);
    const addBooksButton = document.createElement('button');
    addBooksButton.setAttribute('id', 'addBooksButton');
    addBooksButton.innerText = 'Add a book';
    addBooksSection.appendChild(addBooksButton);

    const dataTable = document.createElement('table');
    dataTable.setAttribute('id', 'dataTable');
    appMainView.appendChild(dataTable);







    return app;
}


//stop  multiple append headers!!!
function diplayTableHeaderAll() {
    let selectTable = document.querySelector('#dataTable');
    const tableHeaderBookId = document.createElement('th');
    tableHeaderBookId.setAttribute('id', 'tableHeaderBookId');
    tableHeaderBookId.innerText = 'book id';
    selectTable.appendChild(tableHeaderBookId);
}




/*
function createEntryRows() {
    const tableRow = document.createElement("tr");
    tableRow.setAttribute("id", "entryRow");

    const tableDataFieldId = document.createElement("td");
    tableDataFieldId.setAttribute("id", `fieldId${id}`);
    tableDataFieldId.innerText = `${id}`;

    const tableDataFieldCode = document.createElement("td");
    tableDataFieldCode.setAttribute("id", `fieldCode${id}`);
    tableDataFieldCode.innerText = "nil";

    const tableRowFieldName = document.createElement("td");
    tableRowFieldName.setAttribute("id", `fieldName${id}`);
    tableRowFieldName.innerText = "nil";

    fieldEntryTable.append(tableRow);
    tableRow.append(tableDataFieldId);
    tableRow.append(tableDataFieldCode);
    tableRow.append(tableRowFieldName);
    id++;
}
*/

document.body.appendChild(generateApp());

const allButon = document.querySelector('#allButton');
allButon.addEventListener('click', diplayTableHeaderAll);