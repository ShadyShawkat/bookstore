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
    {books.length !== 0 && (
      <ul className="py-14 gap-3 flex flex-col">
        {books.map((book) => (
          <li
            key={book.item_id}
            className="flex bg-neutral-50 border rounded-md pl-5 pr-8 py-4"
          >
            <Book book={book} />
          </li>
        ))}
      </ul>
    )}
    <div className="border-b-2 border-gray-200 my-5" />
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
