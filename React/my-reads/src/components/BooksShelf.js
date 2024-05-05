import { useState ,useEffect } from 'react';
import '../App.css';
import BooksGrid from "./BooksGrid"

const BooksShelf = ({ books, title, onUpdateBook }) => {
    const [allBooks, setBooks] = useState(books);
    
    useEffect(() => {
        setBooks(books);
        
      }, [books]);
    
      return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <BooksGrid books={allBooks} onUpdateBook={onUpdateBook}></BooksGrid>
            </div>
        </div>
    );
}

export default BooksShelf;