import { TMDB_KEY } from 'helpers/CONST';
import { apiBaseUrl } from './base';

// static api
export const nowShowingMoviesEndpoint = `${apiBaseUrl}/movie/now_playing?api_key=${TMDB_KEY}`;
export const popularMoviesEndpoint = `${apiBaseUrl}/movie/popular?api_key=${TMDB_KEY}&page=1`;
export const genresMoviesEndpoint = `${apiBaseUrl}/genre/movie/list?api_key=${TMDB_KEY}`;
