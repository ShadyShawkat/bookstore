import React from 'react';
import PropTypes from 'prop-types';

import AddBook from '../AddBook/AddBook';
import Book from '../Book/Book';

const BookList = ({ books }) => (
  <div className="px-lg">
    {books.length === 0 && (
      <div className="font-extrabold text-5xl text-gray-500 select-none text-center py-14">
        No books added yet
      </div>
    )}
    <ul className="py-14">
      {books.map((book) => (
        <li
          key={book.item_id}
          className="flex bg-neutral-50 border rounded-md px-5 py-4"
        >
          <Book book={book} />
        </li>
      ))}
    </ul>
    <AddBook />
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

export default BookList;
