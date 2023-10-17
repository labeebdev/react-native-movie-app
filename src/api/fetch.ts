import { apiCall } from './base';
import {
  genresMoviesEndpoint,
  movieCreditsEndpoint,
  movieDetailsEndpoint,
  nowShowingMoviesEndpoint,
  popularMoviesEndpoint,
  searchMoviesEndpoint,
  similarMoviesEndpoint,
} from './enpoints';

// home screen apis
export const fetchNowShowingMovies = () => apiCall(nowShowingMoviesEndpoint);
export const fetchPopularMovies = () => apiCall(popularMoviesEndpoint);
export const fetchGenresMovies = () => apiCall(genresMoviesEndpoint);

// movie details apis
export const fetchMovieDetails = (id: number) =>
  apiCall(movieDetailsEndpoint(id));
export const fetchMovieCredist = (movieId: number) =>
  apiCall(movieCreditsEndpoint(movieId));
export const fetchSimilarMovies = (movieId: number) =>
  apiCall(similarMoviesEndpoint(movieId));

// search screen apis
export const searchMovies = params => apiCall(searchMoviesEndpoint, params);
