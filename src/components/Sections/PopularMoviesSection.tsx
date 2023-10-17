import { View } from '@gluestack-ui/themed';
import React, { useEffect, useState } from 'react';
import { PopularMovieResults } from 'src/types/popularMovies';
import { FlatList } from 'react-native';
import HeaderSection from 'components/Header/HeaderSection';
import PopularMoviesItemCard from 'components/Card/PopularMoviesItemCard';
import { screenWidth } from 'helpers/CONST';
import { Genres, GenresMoviesResponse } from 'src/types/genresMovies';
import { fetchGenresMovies } from 'src/api/fetch';

interface PropsType {
  data: PopularMovieResults[];
}

function PopularMoviesSection({ data }: PropsType) {
  const [genres, setGenres] = useState<Genres[]>([]);
  const getGenresMovies = async () => {
    const result: GenresMoviesResponse = await fetchGenresMovies();

    if (result && result.genres) {
      setGenres(result.genres);
    }
  };

  useEffect(() => {
    getGenresMovies();
  }, []);

  return (
    <View>
      <HeaderSection title="Popular Movies" onPress={() => {}} />
      <FlatList
        data={data.slice(0, 12)}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <PopularMoviesItemCard item={item} genres={genres} />
        )}
        style={{
          marginTop: 20,
          width: screenWidth,
        }}
      />
    </View>
  );
}

export default PopularMoviesSection;
