/* eslint-disable operator-linebreak */
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { addBook } from '../../redux/books/books';

const AddBook = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [categoryValue, setCategoryValue] = useState('none');
  const dispatch = useDispatch();

  const BookTitleInputHandler = (e) => {
    setBookTitle(e.target.value);
  };

  const submitBookHandler = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuid(),
      title: bookTitle.trim(),
      category: categoryValue,
    };
    dispatch(addBook(newBook));
    setBookTitle('');
    setCategoryValue('none');
  };

  return (
    <>
      <h3 className="mb-3 font-bold tracking-wider text-gray-500">
        ADD NEW BOOK
      </h3>
      <form className="flex gap-6 items-center">
        <input
          type="text"
          placeholder="Book title"
          value={bookTitle}
          onChange={BookTitleInputHandler}
          className="h-9 py-0 placeholder:text-gray-400 grow"
        />
        <select
          id="categories"
          value={categoryValue}
          onChange={(e) => setCategoryValue(e.target.value)}
          className={`form-select h-9 py-0 pl-3 pr-12 ${
            categoryValue === 'none' && 'text-gray-400'
          }`}
        >
          <option value="none" disabled hidden className="text-gray-400">
            Category
          </option>
          <option value="action" className="text-black">
            Action
          </option>
          <option value="drama" className="text-black">
            Drama
          </option>
          <option value="sci-fi" className="text-black">
            Sci-Fi
          </option>
          <option value="horror" className="text-black">
            Horror
          </option>
        </select>
        <button
          type="submit"
          onClick={submitBookHandler}
          disabled={bookTitle.trim() === '' || categoryValue === 'none'}
          className="bg-blue-500 text-white font-bold text-xs px-6 py-1 rounded-md h-9 disabled:bg-gray-500"
        >
          ADD BOOK
        </button>
      </form>
    </>
  );
};

export default AddBook;
