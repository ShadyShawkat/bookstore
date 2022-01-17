import React from 'react';
import PropTypes from 'prop-types';
import styles from './Book.module.css';

const Book = ({ book }) => <div className={styles.book}>{book.name}</div>;

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
