import React, { useCallback, useEffect, useState } from 'react';
import RootLayout from 'components/Layout/RootLayout';
import { FlatList } from 'react-native';
import { Text, View } from '@gluestack-ui/themed';
import { fetchGenresMovies, searchMovies } from 'src/api/fetch';
import { debounce } from 'lodash';
import {
  NowShowingMoviesResponse,
  NowShowingMoviesResults,
} from 'src/types/nowShowingMovies';
import PopularMoviesItemCard from 'components/Card/PopularMoviesItemCard';
import { screenWidth } from 'helpers/CONST';
import { Genres, GenresMoviesResponse } from 'src/types/genresMovies';
import SearchHeader from 'components/Header/SearchHeader';

function SearchScreen() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<NowShowingMoviesResults[]>([]);

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
  const handleSearch = search => {
    if (search && search.length > 2) {
      setLoading(true);
      searchMovies({
        query: search,
        include_adult: false,
        language: 'en-US',
        page: '1',
      }).then((data: NowShowingMoviesResponse) => {
        setLoading(false);
        if (data && data.results) setResults(data.results);
      });
    } else {
      setLoading(false);
      setResults([]);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

  const renderElement = () =>
    results.length > 0 ? (
      <FlatList
        data={results.slice(0, 12)}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <PopularMoviesItemCard item={item} genres={genres} />
        )}
        style={{
          marginTop: 20,
          width: screenWidth,
        }}
      />
    ) : undefined;

  return (
    <RootLayout>
      <SearchHeader handleTextDebounce={handleTextDebounce} />

      <View>{loading ? <Text>Loading ...</Text> : renderElement()}</View>
    </RootLayout>
  );
}

export default SearchScreen;
