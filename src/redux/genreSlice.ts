import { Genres } from 'src/types/genresMovies';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

interface InitialState {
  listGenres: Genres[];
}

const initialState: InitialState = {
  listGenres: [],
};

export const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    addGenre: (state, action: PayloadAction<Genres[]>) => {
      // eslint-disable-next-line no-param-reassign
      state.listGenres = action.payload;
    },
  },
});

export default genreSlice.reducer;

export const { addGenre } = genreSlice.actions;
export const getGenre = (state: RootState) => state.genre.listGenres;
