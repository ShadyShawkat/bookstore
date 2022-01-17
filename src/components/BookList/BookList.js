import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookList.module.css';

import AddBook from '../AddBook/AddBook';
import Book from '../Book/Book';

const BookList = ({ books }) => (
  <div className={styles['book-list__wrapper']}>
    <AddBook />
    <ul className={styles['book-list']}>
      {books.map((book) => (
        <li key={book.id}>
          <Book book={book} />
        </li>
      ))}
    </ul>
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

BookList.defaultProps = {};

export default BookList;
