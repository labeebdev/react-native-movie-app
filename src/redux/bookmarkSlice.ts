import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { GenresEntity } from 'src/types/detailsMovie';

export type BookmarkPayload = {
  id: number;
  title: string;
  rating: number | undefined;
  genres: GenresEntity[] | null | undefined;
  overview: string | undefined;
  poster_path: string | undefined;
  release_date: string | undefined;
};
interface InitialState {
  listBookmarks: BookmarkPayload[];
}

const initialState: InitialState = {
  listBookmarks: [],
};

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    addBookmark: (state, action: PayloadAction<BookmarkPayload>) => {
      state.listBookmarks.push(action.payload);
    },
    removeBookmark: (state, action: PayloadAction<{ id: number }>) => {
      // eslint-disable-next-line no-param-reassign
      state.listBookmarks = state.listBookmarks.filter(
        item => item.id !== action.payload.id,
      );
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;

export const getBookmarkMovies = (state: RootState) =>
  state.bookmark.listBookmarks;

export default bookmarkSlice.reducer;
