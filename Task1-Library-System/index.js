```javascript
// 1. Book Class
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = true; // Default to true when a book is created
    }
}

// 2. Library Class
class Library {
    constructor() {
        this.books = [];
    }

    // Method to add a new book to the library
    addBook(book) {
        this.books.push(book);
        console.log(`Added: "${book.title}" to the library.`);
    }

    // Method to borrow a book (marks it unavailable)
    borrowBook(title) {
        const book = this.books.find(b => b.title.toLowerCase() === title.toLowerCase());
        if (book) {
            if (book.available) {
                book.available = false;
                console.log(`Success: You have borrowed "${book.title}".`);
            } else {
                console.log(`Sorry: "${book.title}" is currently unavailable (already borrowed).`);
            }
        } else {
            console.log(`Error: "${title}" was not found in the library.`);
        }
    }

    // Method to return a borrowed book
    returnBook(title) {
        const book = this.books.find(b => b.title.toLowerCase() === title.toLowerCase());
        if (book) {
            if (!book.available) {
                book.available = true;
                console.log(`Success: "${book.title}" has been returned.`);
            } else {
                console.log(`Note: "${book.title}" was already marked as available.`);
            }
        } else {
            console.log(`Error: "${title}" does not belong to this library.`);
        }
    }

    // Method to list all currently available books
    listAvailableBooks() {
        const availableBooks = this.books.filter(b => b.available);
        console.log("\n--- Currently Available Books ---");
        if (availableBooks.length === 0) {
            console.log("No books are currently available.");
        } else {
            availableBooks.forEach(book => {
                console.log(`- "${book.title}" by ${book.author} (${book.year})`);
            });
        }
        console.log("---------------------------------\n");
    }
}

// --- Testing the Implementation ---
const myLibrary = new Library();

// Creating book instances
const book1 = new Book("The Concubine", "Elechi Amadi", 1966);
const book2 = new Book("Things Fall Apart", "Chinua Achebe", 1958);
const book3 = new Book("Half of a Yellow Sun", "Chimamanda Ngozi Adichie", 2006);

// Adding books to library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// List initial available books
myLibrary.listAvailableBooks();

// Borrowing a book
myLibrary.borrowBook("Things Fall Apart");

// Try to borrow it again to test handling
myLibrary.borrowBook("Things Fall Apart");

// List available books after borrowing
myLibrary.listAvailableBooks();

// Returning the book
myLibrary.returnBook("Things Fall Apart");

// List final available status
myLibrary.listAvailableBooks();
