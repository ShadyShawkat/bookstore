import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import books from './books/books';

const reducer = combineReducers({
  books,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
