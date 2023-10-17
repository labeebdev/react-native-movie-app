import { TMDB_KEY } from 'helpers/CONST';
import { apiBaseUrl } from './base';

// static api
export const nowShowingMoviesEndpoint = `${apiBaseUrl}/movie/now_playing?api_key=${TMDB_KEY}`;
export const popularMoviesEndpoint = `${apiBaseUrl}/movie/popular?api_key=${TMDB_KEY}&page=1`;
export const genresMoviesEndpoint = `${apiBaseUrl}/genre/movie/list?api_key=${TMDB_KEY}`;

// Dynamic Api
export const movieDetailsEndpoint = id =>
  `${apiBaseUrl}/movie/${id}?api_key=${TMDB_KEY}`;
export const movieCreditsEndpoint = id =>
  `${apiBaseUrl}/movie/${id}/credits?api_key=${TMDB_KEY}`;
export const similarMoviesEndpoint = id =>
  `${apiBaseUrl}/movie/${id}/similar?api_key=${TMDB_KEY}`;
export const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?api_key=${TMDB_KEY}`;
