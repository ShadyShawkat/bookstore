/* eslint-disable operator-linebreak */
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './AddBook.module.css';

import { addBookAsync } from '../../redux/books/books';

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
    dispatch(addBookAsync(newBook));
    setBookTitle('');
    setCategoryValue('none');
  };

  return (
    <form className={styles['add-form']}>
      <input
        type="text"
        placeholder="Add a book title"
        value={bookTitle}
        onChange={BookTitleInputHandler}
      />
      <label htmlFor="categories">
        Choose a category:
        <select
          id="categories"
          value={categoryValue}
          onChange={(e) => setCategoryValue(e.target.value)}
        >
          <option value="none" disabled hidden>
            Categories
          </option>
          <option value="action">Action</option>
          <option value="drama">Drama</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="horror">Horror</option>
        </select>
      </label>
      <button
        type="submit"
        onClick={submitBookHandler}
        disabled={bookTitle.trim() === '' || categoryValue === 'none'}
      >
        Add
      </button>
    </form>
  );
};

export default AddBook;
