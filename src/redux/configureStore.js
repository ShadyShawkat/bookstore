import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import books from './books/books';

const reducer = combineReducers({
  books,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
