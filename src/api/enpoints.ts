import { TMDB_KEY } from 'helpers/CONST';
import { apiBaseUrl } from './base';

// static api
export const nowShowingMoviesEndpoint = `${apiBaseUrl}/movie/now_playing?api_key=${TMDB_KEY}`;
export const last = 'last';
