import React from 'react';
import PropTypes from 'prop-types';
import styles from './Book.module.css';

const Book = ({ book }) => (
  <>
    <h4 className={styles['book-name']}>{book.name}</h4>
    <button type="button">Remove</button>
  </>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
