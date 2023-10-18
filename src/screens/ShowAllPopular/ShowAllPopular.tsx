import React, { useEffect, useState } from 'react';
import RootLayout from 'components/Layout/RootLayout';
import { Box, Heading, Text, View } from '@gluestack-ui/themed';
import { fetchPopularMovies } from 'src/api/fetch';
import { screenWidth } from 'helpers/CONST';
import { FlatList } from 'react-native';
import PopularMoviesItemCard from 'components/Card/PopularMoviesItemCard';
import { useAppSelector } from 'redux/hooks';
import { getGenre } from 'redux/genreSlice';
import {
  PopularMovieResults,
  PopularMoviesResponse,
} from 'src/types/popularMovies';

function ShowAllPopularScreen() {
  const [loading, setLoading] = useState<boolean>(true);
  const [popularMovies, setPopularMovies] = useState<PopularMovieResults[]>([]);

  const genres = useAppSelector(getGenre);

  const getPopularMovies = async () => {
    const data: PopularMoviesResponse = await fetchPopularMovies();
    if (data && data.results) {
      setPopularMovies(data.results);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  const renderElement = () =>
    popularMovies.length > 0 && (
      <FlatList
        data={popularMovies}
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
        <Heading size="lg">Popular Movies</Heading>
      </Box>

      <View>{loading ? <Text>Loading ...</Text> : renderElement()}</View>
    </RootLayout>
  );
}

export default ShowAllPopularScreen;
