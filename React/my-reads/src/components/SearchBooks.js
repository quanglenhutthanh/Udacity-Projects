import "../App.css";
import { Link } from "react-router-dom";
import BooksGrid from "./BooksGrid";
import { useState, useEffect, useCallback, useRef } from "react";
import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";

const SearchBooks = ({ onUpdateBook }) => {
  const [query, setQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);
  const maxResults = 10;
  const queryRef = useRef(query);
  const fetchBooks = useCallback(async () => {
    if (queryRef.current.trim() !== "") {
      try {
        const res = await BooksAPI.search(queryRef.current.trim(), maxResults);
        if (res && res.error) {
          console.error("Error in the search request:", res.error);
          setSearchedBooks([]);
        } else {
          const booksInShelf = await BooksAPI.getAll();
          const matchedBooks = res.map((book) => {
            const matchedBook = booksInShelf.find((b) => b.id === book.id);
            return matchedBook ? { ...book, shelf: matchedBook.shelf } : book;
          });
          setSearchedBooks(matchedBooks || []);
        }
      } catch (error) {
        setSearchedBooks([]);
      }
    } else {
      setSearchedBooks([]);
    }
  }, [maxResults]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (queryRef.current.trim() === "") {
        setSearchedBooks([]);
      } else {
        fetchBooks();
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [fetchBooks]);

  useEffect(() => {
    queryRef.current = query;
    const timeoutId = setTimeout(() => {
      fetchBooks();
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [query, fetchBooks]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/"></Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <BooksGrid
          books={searchedBooks}
          onUpdateBook={onUpdateBook}
        ></BooksGrid>
      </div>
    </div>
  );
};

SearchBooks.propTypes = {
  onUpdateBook: PropTypes.func.isRequired,
};

export default SearchBooks;
