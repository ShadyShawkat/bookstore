import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { removeBook } from '../../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <>
      <div className="flex flex-col grow">
        <span className="">{book.category}</span>
        <span className="">{book.title}</span>
        <span>Suzanne Collins</span>
        <div>
          <button type="button">Comment</button>
          <button type="button" onClick={removeBookHandler}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="flex">
        <div className="rotate-45 border-8 border-l-neutral-300 border-sky-600 w-14 h-14 rounded-full" />
        <span>75%</span>
      </div>
      <div className="flex flex-col">
        <span>CURRENT CHAPTER</span>
        <span>Introduction</span>
        <button type="button">UPDATE PROGRESS</button>
      </div>
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
