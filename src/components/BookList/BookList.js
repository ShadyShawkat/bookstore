import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookList.module.css';

import AddBook from '../AddBook/AddBook';
import Book from '../Book/Book';

const BookList = ({ books }) => (
  <div className={styles['book-list__wrapper']}>
    <AddBook />
    {books.length === 0 && (
      <div className={styles['no-books-div']}>No books added yet</div>
    )}
    <ul className={styles['book-list']}>
      {books.map((book) => (
        <li key={book.item_id}>
          <Book book={book} />
        </li>
      ))}
    </ul>
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

BookList.defaultProps = {};

export default BookList;
