/* eslint-disable operator-linebreak */
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';

const baseURL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/bHuFSNeqeLPXOroi5beE';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const fetchBooks = (payload) => ({
  type: FETCH_BOOKS,
  payload,
});

export const fetchBooksAsync = () => (dispatch) => {
  fetch(`${baseURL}/books`)
    .then((data) => data.json())
    .then((data) => {
      dispatch(fetchBooks(data));
    })
    .catch((err) => {
      console.log(err);
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
