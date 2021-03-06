import {
  fetchBooksAsync,
  addBookAsync,
  removeBookAsync,
} from '../../API/APIHelper';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';

const initialState = [];

const capitalizeWords = (string) => string
  .toLowerCase()
  .replace(/(^\w{1})|(\s{1}\w{1})|([-]\w{1})/g, (match) => match.toUpperCase());

export const addBook = (newBook) => async (dispatch) => {
  await addBookAsync(newBook);
  const book = {
    ...newBook,
    title: capitalizeWords(newBook.title),
    category: capitalizeWords(newBook.category),
  };
  dispatch({
    type: ADD_BOOK,
    payload: book,
  });
};

export const removeBook = (id) => async (dispatch) => {
  await removeBookAsync(id);
  dispatch({
    type: REMOVE_BOOK,
    payload: id,
  });
};

export const fetchBooks = () => async (dispatch) => {
  const data = await fetchBooksAsync();
  const books = [];
  [...Object.entries(data)].forEach((b) => {
    const book = {
      item_id: b[0],
      title: capitalizeWords(b[1][0].title),
      category: capitalizeWords(b[1][0].category),
    };
    books.push(book);
  });

  dispatch({
    type: FETCH_BOOKS,
    payload: books,
  });

  return 'loaded';
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
