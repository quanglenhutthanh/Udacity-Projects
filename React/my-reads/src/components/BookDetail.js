import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BookDetail = ({ books }) => {
    const { bookId } = useParams();

    const book = books.find((b) => b.id === bookId);
    
    return (

        <div className="book-detail">
            <div className="search-books-bar">
                <Link className="close-search" to="/"></Link>
                <h2 className="book-detail-title">{book.title}</h2>
            </div>
            <div className="book-detail-header">
                <div>
                    <p className="book-detail-author">
                        <span>Authors:</span> {book.authors}
                    </p>
                    <p className="book-detail-author">
                        <span>Publisher:</span> {book.publisher}
                    </p>
                    <p className="book-detail-author">
                    <span>Published Date:</span> {book.publishedDate}
                    </p>
                </div>
                <img
                    className="book-detail-cover"
                    src={book.imageLinks.thumbnail}
                    alt={`${book.title} cover`}
                />
            </div>
            <p className="book-detail-description">{book.description}</p>
            {/* Add more details or components as needed */}
        </div>
    );
}

export default BookDetail;
