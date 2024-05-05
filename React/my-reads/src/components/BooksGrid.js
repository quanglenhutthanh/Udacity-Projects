import { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI"
import { Link } from "react-router-dom";
 

const BooksGrid = ({ books, onUpdateBook }) => {
    const [booksInBookShelf, setBooksInBookShelf] = useState(books);
    const [selectedShelf, setSelectedShelf] = useState("");

    const HandleSelectChange = async (book, selectedValue) => {
        await BooksAPI.update(book, selectedValue);
        setBooksInBookShelf((prevBooks) => {
            const updatedBooks = prevBooks.map((b) =>
              b.id === book.id ? { ...b, shelf: selectedValue } : b
            );
        
            setBooksInBookShelf(updatedBooks);
        
            onUpdateBook();
        
            console.log("BooksGrid - Updated books");
            return updatedBooks;
          });
        
      };
    useEffect(() => {
        setBooksInBookShelf(books);
    }, [books])

    return (
        (booksInBookShelf && booksInBookShelf.length > 0) ? (
            <ol className="books-grid">
                {
                    booksInBookShelf.map((book) => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div
                                        className="book-cover"
                                        style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : 'fallback-image-url'})`
                                        }}
                                    ></div>
                                    <div className="book-shelf-changer">
                                        <select
                                            value={book.shelf ? book.shelf : "none"}
                                            onChange={(e) => HandleSelectChange(book, e.target.value)}
                                        >
                                            <option value="none" disabled>
                                                Move to...
                                            </option>
                                            <option value="currentlyReading">
                                                Currently Reading
                                            </option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">
                                    <Link to={`/books/${book.id}`}>{book.title}</Link></div>
                                <div className="book-authors">{book.authors}</div>
                            </div>
                        </li>
                    ))}
            </ol>
        ) : (
            <p>No books available</p>
        )

    );
}

export default BooksGrid;