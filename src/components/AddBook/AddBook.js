import React from 'react';
import styles from './AddBook.module.css';

const AddBook = () => (
  <form className={styles['add-form']}>
    <input type="text" placeholder="Add a book" />
    <label htmlFor="categories">
      Choose a category:
      <select id="categories">
        <option value="none" disabled hidden selected>
          Categories
        </option>
        <option value="action">Action</option>
        <option value="drama">Drama</option>
        <option value="sci-fi">Sci-Fi</option>
        <option value="horror">Horror</option>
      </select>
    </label>
    <button type="submit">Add</button>
  </form>
);

export default AddBook;
