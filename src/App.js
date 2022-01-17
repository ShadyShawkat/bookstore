import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';

import Nav from './components/Nav/Nav';
import BookList from './components/BookList/BookList';
import CategoryList from './components/CategoryList/CategoryList';

const dummyBooksData = [
  {
    id: 1,
    name: 'Nice book',
    category: 'Action',
  },
  {
    id: 2,
    name: 'Great book',
    category: 'Drama',
  },
  {
    id: 3,
    name: 'Best book',
    category: 'Sci-Fi',
  },
];

function App() {
  return (
    <>
      <Nav />
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={<BookList books={dummyBooksData} />} />
          <Route path="/categories" element={<CategoryList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
