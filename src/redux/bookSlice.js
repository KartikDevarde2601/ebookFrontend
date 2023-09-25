// bookSlice.js
import { createSlice } from "@reduxjs/toolkit";
import booksData from './data.js'

// const headers = {
//     Authorization: '993f91dd6366dbe53ce25125db26167386c8f00607d17841dd90e4bf9f87216d0980c8a352bee1242c546cae76b532805e99bbb5fb53bb8ce4b1353b4030d63e625f7297bba02e075dcb6219bf658a2221421466f0567d5033e973f7dfa5ea1c2f738760053b0f04184ed6c8059ddb777114d39ae0b72bde9ecca0f46b858b77',
// };

export const bookSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        isLoading: false,
        isSearch: false,
        searchFilter: ''
    },

    reducers: {
        getBookFetch: (state) => {
            state.isLoading = true;
        },

        getBooksSuccess: (state, action) => {
            state.books = action.payload.data;
            state.isLoading = false;
        },

        getBookFailure: (state) => {
            state.isLoading = false;
        },

        startSearch: (state) => {
          state.isSearch = true;
        },

        setSearchFilter: (state, action) => {
          state.searchFilter = action.payload;
        },

        endSearch: (state) => {
          state.isSearch = false;
        },
    }
});

export const { getBookFetch, getBooksSuccess, getBookFailure,setSearchFilter,startSearch,endSearch } = bookSlice.actions;

// export const fetchBooks = () => async (dispatch) => {
//     dispatch(getBookFetch());

//     try {
//         const response = await fetch('https://ebooklibrary.onrender.com/api/books?populate=*', {
//             headers,
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const books = await response.json();
//         dispatch(getBooksSuccess(books));
//     } catch (error) {
//         dispatch(getBookFailure());
//     }
// };



export const fetchBooks = () => async (dispatch) => {
  dispatch(getBookFetch());

  try {
    // Simulate a delay using setTimeout
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Use the imported JSON data directly
    const books = booksData;

    // Dispatch a success action with the fetched books
    dispatch(getBooksSuccess(books));
  } catch (error) {
    // Dispatch a failure action in case of an error
    dispatch(getBookFailure());
  }
};


export const fetchBooksWithDelay = () => async (dispatch) => {
  dispatch(getBookFetch());

  try {
    // Simulate a delay using setTimeout
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Use the imported JSON data directly
    const books = booksData;

    // Dispatch a success action with the fetched books
    dispatch(getBooksSuccess(books));
  } catch (error) {
    // Dispatch a failure action in case of an error
    dispatch(getBookFailure());
  }
};


export default bookSlice.reducer;
