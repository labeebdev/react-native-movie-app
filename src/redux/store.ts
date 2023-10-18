import { configureStore } from '@reduxjs/toolkit';
import bookmarkReducers from './bookmarkSlice';

export const store = configureStore({
  reducer: {
    bookmark: bookmarkReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
