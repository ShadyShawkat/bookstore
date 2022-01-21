import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import styles from './App.module.css';

import { fetchBooks } from './redux/books/books';
import Nav from './components/Nav/Nav';
import BookList from './components/BookList/BookList';
import CategoryList from './components/CategoryList/CategoryList';

const App = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <>
      <Nav />
      {/* <div className={styles.wrapper}> */}
      <Routes>
        <Route path="/" element={<BookList books={books} />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/bookstore" element={<BookList books={books} />} />
      </Routes>
      {/* </div> */}
    </>
  );
};

export default App;
