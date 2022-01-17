import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookList.module.css';

import Book from '../Book/Book';

const BookList = ({ books }) => (
  <div className={styles['book-list']}>
    {books.map((book) => (
      <Book key={book.id} book={book} />
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(Book).isRequired,
};

BookList.defaultProps = {};

export default BookList;
