import './App.css';
import { Route, Routes } from "react-router-dom";
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';
import BookDetail from './components/BookDetail';
import NotFound from './components/NotFound';
import { useState, useEffect } from 'react';
import * as BooksAPI from "./BooksAPI";


const App = () => {
  const [books, setBooks] = useState([]);

  const updateBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  }
 
  useEffect(() => {
    updateBooks();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ListBooks books={books} onUpdateBook={updateBooks}/>
        }
      />
      <Route
        path="/search"
        element={
          <SearchBooks onUpdateBooks={updateBooks} onUpdateBook={updateBooks}/>
        }
      />
      <Route 
        path="/books/:bookId"
        element={ <BookDetail books={books} /> }
         />
      <Route path="*"
                    element={<NotFound />} 
        />
      
    </Routes>
  );
}

export default App;
