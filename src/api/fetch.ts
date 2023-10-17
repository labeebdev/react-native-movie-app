import { apiCall } from './base';
import { nowShowingMoviesEndpoint } from './enpoints';

// home screen apis
export const fetchNowShowingMovies = () => apiCall(nowShowingMoviesEndpoint);

export const other = 'other';
