const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 }
];

const searchInput = document.getElementById('searchInput');
const bookList = document.getElementById('bookList');

function displayBooks(books) {
    bookList.innerHTML = '';
    books.forEach(book => {
        let li = document.createElement('li');
        const titleHighlighted = highlightMatches(book.title, searchInput.value);
        const authorHighlighted = highlightMatches(book.author, searchInput.value);
        li.innerHTML = `${titleHighlighted} by ${authorHighlighted} (${book.year})`;
        bookList.appendChild(li);
    });
}


function highlightMatches(text, keyword) {
    const regex = new RegExp(keyword, 'gi');
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
}

function filterBooks(keyword) {
    const filteredBooks = books.filter(book => {
        const titleMatch = book.title.toLowerCase().includes(keyword.toLowerCase());
        const authorMatch = book.author.toLowerCase().includes(keyword.toLowerCase());
        return titleMatch || authorMatch;
    });
    displayBooks(filteredBooks);
}

searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.trim();
    if (keyword) {
        filterBooks(keyword);
    } else {
        displayBooks(books);
    }
});

displayBooks(books);