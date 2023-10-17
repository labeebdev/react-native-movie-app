import { Dimensions } from 'react-native';

export const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;

export const { width: screenWidth, height: screenHeight } =
  Dimensions.get('screen');
