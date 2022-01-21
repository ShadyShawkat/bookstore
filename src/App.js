import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchBooks } from './redux/books/books';
import Nav from './components/Nav/Nav';
import BookList from './components/BookList/BookList';
import CategoryList from './components/CategoryList/CategoryList';

const App = () => {
  const books = useSelector((state) => state.books);
  const [booksLoadingState, setBookLoadingState] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks()).then(() => {
      setBookLoadingState(true);
    });
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <BookList books={books} booksLoadingState={booksLoadingState} />
          }
        />
        <Route path="/categories" element={<CategoryList />} />
        <Route
          path="/bookstore"
          element={
            <BookList books={books} booksLoadingState={booksLoadingState} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
