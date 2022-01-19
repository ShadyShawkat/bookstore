import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Book.module.css';

import { removeBook } from '../../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <>
      <h4>
        <span className={styles['book-title']}>{book.title}</span>
        <span className={styles['book-category']}>{book.category}</span>
      </h4>
      <button type="button" onClick={removeBookHandler}>
        Remove
      </button>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
