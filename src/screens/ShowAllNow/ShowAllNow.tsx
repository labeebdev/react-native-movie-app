import React, { useEffect, useState } from 'react';
import RootLayout from 'components/Layout/RootLayout';
import { Box, Heading, Text, View } from '@gluestack-ui/themed';
import {
  NowShowingMoviesResponse,
  NowShowingMoviesResults,
} from 'src/types/nowShowingMovies';
import { fetchNowShowingMovies } from 'src/api/fetch';
import { screenWidth } from 'helpers/CONST';
import { FlatList } from 'react-native';
import PopularMoviesItemCard from 'components/Card/PopularMoviesItemCard';
import { useAppSelector } from 'redux/hooks';
import { getGenre } from 'redux/genreSlice';

function ShowAllNowScreen() {
  const [loading, setLoading] = useState<boolean>(true);
  const [showingMovies, setShowingMovies] = useState<NowShowingMoviesResults[]>(
    [],
  );

  const genres = useAppSelector(getGenre);

  const getNowShowingMovies = async () => {
    const data: NowShowingMoviesResponse = await fetchNowShowingMovies();
    if (data && data.results) {
      setShowingMovies(data.results);
      setLoading(false);
    }
  };

  useEffect(() => {
    getNowShowingMovies();
  }, []);

  const renderElement = () =>
    showingMovies.length > 0 && (
      <FlatList
        data={showingMovies}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <PopularMoviesItemCard item={item} genres={genres} />
        )}
        style={{
          marginTop: 20,
          width: screenWidth,
        }}
      />
    );

  return (
    <RootLayout>
      <Box mt="$7">
        <Heading size="lg">Now Showing</Heading>
      </Box>

      <View>{loading ? <Text>Loading ...</Text> : renderElement()}</View>
    </RootLayout>
  );
}

export default ShowAllNowScreen;
