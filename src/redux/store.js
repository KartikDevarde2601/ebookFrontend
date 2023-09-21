// store.js
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; // Import Redux Thunk
import booksReducer from './bookSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    // Add other reducers here if needed
  },
  middleware: [thunk], // Apply Redux Thunk middleware
});

export default store;
