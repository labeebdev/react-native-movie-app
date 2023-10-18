import { configureStore } from '@reduxjs/toolkit';
import bookmarkReducers from './bookmarkSlice';
import genreReducers from './genreSlice';

export const store = configureStore({
  reducer: {
    bookmark: bookmarkReducers,
    genre: genreReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
