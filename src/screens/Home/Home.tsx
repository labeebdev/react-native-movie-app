import React, { useState, useEffect } from 'react';
import {
  NowShowingMoviesResponse,
  NowShowingMoviesResults,
} from 'src/types/fetchMovies';
import { fetchNowShowingMovies } from 'src/api/fetch';
import RootLayout from 'components/Layout/RootLayout';
import CHeader from 'components/Header/Header';
import NowShowingSection from 'components/Sections/NowShowingSection';

function HomeScreen() {
  const [showingMovies, setShowingMovies] = useState<NowShowingMoviesResults[]>(
    [],
  );

  const getNowShowingMovies = async () => {
    const data: NowShowingMoviesResponse = await fetchNowShowingMovies();
    if (data && data.results) setShowingMovies(data.results);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getNowShowingMovies();
  }, []);

  return (
    <RootLayout>
      <CHeader />
      <NowShowingSection data={showingMovies} />
    </RootLayout>
  );
}

export default HomeScreen;
