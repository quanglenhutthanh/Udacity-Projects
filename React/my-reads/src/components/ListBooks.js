import { useEffect, useState } from "react";
import BooksShelf from "./BooksShelf";
import { Link } from "react-router-dom";

const ListBooks = ({books, onUpdateBook}) => {
    const [allBooks, setBooks] = useState(books);
    const [readings,setReadings] = useState([]);
    const [wantToRead,setWantToRead] = useState([]);
    const [read,setRead] = useState([]);

    const filterBooks = (shelf) => {
        return allBooks.filter((book) => book.shelf === shelf);
    }
    const updateBookShelfs = () => {
        console.log("books filter");
        setReadings(filterBooks("currentlyReading"));
        setWantToRead(filterBooks("wantToRead"));
        setRead(filterBooks("read"));
    }
    useEffect(() => {
        setBooks(books);
        updateBookShelfs();
    },[books])
    
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BooksShelf key="Currently Reading" books={readings} title={"Currently Reading"} onUpdateBook={onUpdateBook}></BooksShelf>
                <BooksShelf key="Want to Read" books={wantToRead} title={"Want to Read"} onUpdateBook={onUpdateBook}></BooksShelf>
                <BooksShelf key="Read" books={read} title={"Read"} onUpdateBook={onUpdateBook}></BooksShelf>
            </div>
            <div className="open-search">
                <Link to="/search">
                </Link>
            </div>
        </div>
    );
}

export default ListBooks;