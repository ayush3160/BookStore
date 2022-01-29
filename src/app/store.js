import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
  },
});
