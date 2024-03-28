document.addEventListener('DOMContentLoaded', () => {
    displayBooks();
});

function displayBooks() {
    const bookTableBody = document.getElementById('bookTableBody');
    const books = JSON.parse(localStorage.getItem('books')) || [];

    bookTableBody.innerHTML = '';

    books.forEach(book => {
        const row = `
            <tr id="row-${book.id}">
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.category}</td>
                <td>
                    <button onclick="editBook(${book.id})" class="btn btn-primary btn-sm">Edit</button>
                    <button onclick="deleteBook(${book.id})" class="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
        `;
        bookTableBody.innerHTML += row;
    });
}

function addBook() {
    const title = prompt('Enter book title:');
    const author = prompt('Enter book author:');
    const category = prompt('Enter book category:');

    const books = JSON.parse(localStorage.getItem('books')) || [];
    const id = books.length > 0 ? books[books.length - 1].id + 1 : 1;
    const newBook = { id, title, author, category };
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));
    displayBooks();
}

function editBook(id) {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const book = books.find(b => b.id === id);

    if (book) {
        const title = prompt('Enter book title:', book.title);
        const author = prompt('Enter book author:', book.author);
        const category = prompt('Enter book category:', book.category);

        book.title = title;
        book.author = author;
        book.category = category;

        localStorage.setItem('books', JSON.stringify(books));
        displayBooks();
    } else {
        console.error('Book not found');
    }
}

function deleteBook(id) {
    let books = JSON.parse(localStorage.getItem('books')) || [];
    books = books.filter(book => book.id !== id);
    localStorage.setItem('books', JSON.stringify(books));
    displayBooks();
}
