import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { removeBook } from '../../redux/books/books';

const randomAuthors = [
  'Suzanne Collins',
  'Robert Mark',
  'Frank Helbert',
  'Felix Kjellberg',
  'Mark Fischbach',
  'Chris Wilson',
];

const getRandomAuthor = () => {
  const randomIndex = Math.floor(Math.random() * randomAuthors.length);
  return randomAuthors[randomIndex];
};

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <>
      <div className="flex flex-col grow tracking-wide">
        <span className="text-xs font-bold text-gray-500">{book.category}</span>
        <span className="text-2xl font-bold">{book.title}</span>
        <span className="text-xs text-blue-500">{getRandomAuthor()}</span>
        <div className="mt-4 flex text-xs text-blue-500">
          <button type="button">Comment</button>
          <button
            type="button"
            className="mx-3 border-x-2 px-3"
            onClick={removeBookHandler}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="flex items-center border-r-2 my-4 mr-sm pr-sm">
        <div className="rotate-45 border-4 border-l-neutral-300 border-sky-700 w-14 h-14 rounded-full" />
        <div className="flex flex-col ml-3">
          <span>75%</span>
          <span className="text-xs text-gray-600">Completed</span>
        </div>
      </div>
      <div className="flex flex-col tracking-wider gap-2">
        <span className="text-xs text-gray-400">CURRENT CHAPTER</span>
        <span className="tracking-normal text-sm">Introduction</span>
        <button
          type="button"
          className="bg-blue-500 text-white font-medium text-xs px-6 py-1 rounded-md mt-4"
        >
          UPDATE PROGRESS
        </button>
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
