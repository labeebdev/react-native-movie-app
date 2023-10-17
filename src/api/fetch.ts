import { apiCall } from './base';
import {
  genresMoviesEndpoint,
  nowShowingMoviesEndpoint,
  popularMoviesEndpoint,
} from './enpoints';

// home screen apis
export const fetchNowShowingMovies = () => apiCall(nowShowingMoviesEndpoint);
export const fetchPopularMovies = () => apiCall(popularMoviesEndpoint);
export const fetchGenresMovies = () => apiCall(genresMoviesEndpoint);
