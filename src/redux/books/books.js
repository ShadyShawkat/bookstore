/* eslint-disable operator-linebreak */
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';

const baseURL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/bHuFSNeqeLPXOroi5beE';

const initialState = [];

const addBook = (payload) => ({
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

export const addBookAsync = (newBook) => (dispatch) => {
  fetch(`${baseURL}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  })
    .then(() => {
      dispatch(addBook(newBook));
    })
    .catch((err) => {
      console.log(err);
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS: {
      const books = [];
      [...Object.entries(action.payload)].forEach((b) => {
        const book = {
          item_id: b[0],
          title: b[1][0].title,
          category: b[1][0].category,
        };
        books.push(book);
      });
      return books;
    }
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
