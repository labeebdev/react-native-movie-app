import React, { useEffect, useState } from 'react';
import RootLayout from 'components/Layout/RootLayout';
import { Text } from '@gluestack-ui/themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from 'src/App';
import { MovieDetailsResponse } from 'src/types/detailsMovie';
import {
  fetchMovieCredist,
  fetchMovieDetails,
  fetchSimilarMovies,
} from 'src/api/fetch';
import MovieDetailHeader from 'components/Header/MovieDetailHeader';
import { CastEntity, MovieCreditsResponse } from 'src/types/movieCredit';
import MovieDetailSection from 'components/Sections/MovieDetailSection';
import {
  SimilarMoviesResponse,
  SimilarMoviesResult,
} from 'src/types/similarMovies';

type NavigationProps = NativeStackScreenProps<RootStackParams, 'MovieDetail'>;

function MovieDetail({ route, navigation }: NavigationProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [detailMovie, setDetailMovie] = useState<
    MovieDetailsResponse | undefined
  >(undefined);
  const [cast, setCast] = useState<CastEntity[]>([]);
  const [similarMovies, setSimilarMovies] = useState<SimilarMoviesResult[]>([]);
  const getMovieDetails = async () => {
    const data: MovieDetailsResponse = await fetchMovieDetails(route.params.id);
    if (data) {
      setDetailMovie(data);
      setLoading(false);
    }
  };

  const getMovieCredits = async () => {
    const data: MovieCreditsResponse = await fetchMovieCredist(route.params.id);
    if (data && data.cast) {
      setCast(data.cast);
    }
  };

  const getSimilarMovies = async () => {
    const data: SimilarMoviesResponse = await fetchSimilarMovies(
      route.params.id,
    );
    if (data && data.results) {
      setSimilarMovies(data.results);
    }
  };

  useEffect(() => {
    getMovieDetails();
    getMovieCredits();
    getSimilarMovies();
  }, []);

  return (
    <RootLayout fluid>
      {loading ? (
        <Text>Loading ...</Text>
      ) : (
        <MovieDetailHeader
          onPress={() => navigation.goBack()}
          detailMovie={detailMovie}
        />
      )}
      <MovieDetailSection
        detailMovie={detailMovie}
        cast={cast}
        similarMovies={similarMovies}
      />
    </RootLayout>
  );
}

export default MovieDetail;
