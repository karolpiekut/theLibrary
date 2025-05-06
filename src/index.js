import './style.css'

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



    const addBooksButton = document.createElement('button');
    addBooksButton.setAttribute('id', 'addBooksButton');
    addBooksButton.innerText = 'Add a book';
    menuBar.appendChild(addBooksButton);







    return app;
}

document.body.appendChild(generateApp());