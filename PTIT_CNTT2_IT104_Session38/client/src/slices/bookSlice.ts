import { createSlice } from '@reduxjs/toolkit';
import { getAllBooks, addBook, deleteBook, updateBook } from '../apis/api';
import { type InitialState } from '../types/type';

const initialState: InitialState = {
  list: [],
  status: 'idle',
  error: null,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllBooks.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.status = 'success';
        state.list = action.payload;
      })
      .addCase(getAllBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch books';
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.list = state.list.filter((book) => book.id !== action.payload);
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        const index = state.list.findIndex((book) => book.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
      });
  },
});

export const bookReducer = bookSlice.reducer;