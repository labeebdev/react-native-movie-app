import React, { useState, useEffect } from 'react';
import {
  NowShowingMoviesResponse,
  NowShowingMoviesResults,
} from 'src/types/nowShowingMovies';
import {
  fetchGenresMovies,
  fetchNowShowingMovies,
  fetchPopularMovies,
} from 'src/api/fetch';
import RootLayout from 'components/Layout/RootLayout';
import CHeader from 'components/Header/Header';
import NowShowingSection from 'components/Sections/NowShowingSection';
import PopularMoviesSection from 'components/Sections/PopularMoviesSection';
import { Text, View } from '@gluestack-ui/themed';
import {
  PopularMovieResults,
  PopularMoviesResponse,
} from 'src/types/popularMovies';
import { GenresMoviesResponse } from 'src/types/genresMovies';
import { useAppDispatch } from 'redux/hooks';
import { addGenre } from 'redux/genreSlice';

function HomeScreen() {
  const [loading, setLoading] = useState<boolean>(true);
  const [showingMovies, setShowingMovies] = useState<NowShowingMoviesResults[]>(
    [],
  );
  const [popularMovies, setPopularMovies] = useState<PopularMovieResults[]>([]);

  const dispatch = useAppDispatch();
  const getNowShowingMovies = async () => {
    const data: NowShowingMoviesResponse = await fetchNowShowingMovies();
    if (data && data.results) {
      setShowingMovies(data.results);
      setLoading(false);
    }
  };
  const getPopularMovies = async () => {
    const data: PopularMoviesResponse = await fetchPopularMovies();
    if (data && data.results) {
      setPopularMovies(data.results);
    }
  };

  const getGenresMovies = async () => {
    const result: GenresMoviesResponse = await fetchGenresMovies();

    if (result && result.genres) {
      dispatch(addGenre(result.genres));
    }
  };

  useEffect(() => {
    getNowShowingMovies();
    getPopularMovies();
    getGenresMovies();
  }, []);

  return (
    <RootLayout>
      <CHeader />
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <View mt="$5">
          <NowShowingSection data={showingMovies} />
          <PopularMoviesSection data={popularMovies} />
        </View>
      )}
    </RootLayout>
  );
}

export default HomeScreen;
