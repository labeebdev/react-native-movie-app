import React from 'react';
import Styles from 'screens/MovieDetail/style';
import { Box, Heading, HStack, Text, View, VStack } from '@gluestack-ui/themed';
import { BookmarkIcon as BookmarkIconOutline } from 'react-native-heroicons/outline';
import { BookmarkIcon as BookmarkIconSolid } from 'react-native-heroicons/solid';
import Rating from 'components/Rating/Rating';
import GenreItemCard from 'components/Card/GenreItemCard';
import CastMovieCarousel from 'components/Carousel/CastMovieCarousel';
import { MovieDetailsResponse } from 'src/types/detailsMovie';
import { CastEntity } from 'src/types/movieCredit';
import { SimilarMoviesResult } from 'src/types/similarMovies';
import SimilarMoviesCarousel from 'components/Carousel/SimilarMoviesCarousel';
import {
  addBookmark,
  getBookmarkMovies,
  removeBookmark,
} from 'redux/bookmarkSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { TouchableOpacity } from 'react-native';

interface PropsType {
  detailMovie: MovieDetailsResponse | undefined;
  cast: CastEntity[];
  similarMovies: SimilarMoviesResult[];
}

function MovieDetailSection({ detailMovie, cast, similarMovies }: PropsType) {
  const dispatch = useAppDispatch();
  const bookmarkMovies = useAppSelector(getBookmarkMovies);

  const isBookmarkMovies = bookmarkMovies.some(
    item => item.id === detailMovie?.id,
  );

  const toogleBookmark = () => {
    if (!isBookmarkMovies) {
      dispatch(
        addBookmark({
          id: detailMovie?.id as number,
          title: detailMovie?.title as string,
          rating: detailMovie?.vote_average,
          genres: detailMovie?.genres,
          overview: detailMovie?.overview,
          poster_path: detailMovie?.poster_path,
          release_date: detailMovie?.release_date,
        }),
      );
    } else {
      dispatch(removeBookmark({ id: detailMovie?.id as number }));
    }
  };

  return (
    <View bg="$secondary0" flex={1} px="$5" py="$4" style={Styles.container}>
      <HStack
        space="sm"
        bg="$secondary50"
        pr="$4"
        alignItems="start"
        justifyContent="space-between">
        <Heading size="xl" w="85%">
          {detailMovie?.title}
        </Heading>
        <TouchableOpacity
          style={{
            backgroundColor: '#E9E9E9',
            height: 45,
            width: 45,
            marginTop: 5,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
          }}
          onPress={toogleBookmark}>
          {isBookmarkMovies ? (
            <BookmarkIconSolid color="black" size={26} />
          ) : (
            <BookmarkIconOutline color="black" size={26} />
          )}
        </TouchableOpacity>
      </HStack>

      <Box mt="$2">
        <Rating rating={detailMovie?.vote_average as number} />
      </Box>

      <HStack mt="$3" space="sm" flexWrap="wrap">
        {detailMovie?.genres?.map(item => (
          <GenreItemCard key={item.id} genreName={item.name} />
        ))}
      </HStack>

      <HStack mt="$6" justifyContent="space-evenly">
        <VStack alignItems="center">
          <Text bold>Year</Text>
          <Text>{detailMovie?.release_date.split('-')[0]}</Text>
        </VStack>
        <VStack alignItems="center">
          <Text bold>Length</Text>
          <Text>{detailMovie?.runtime} Min</Text>
        </VStack>
        <VStack alignItems="center">
          <Text bold>Languange</Text>
          <Text>{detailMovie?.original_language}</Text>
        </VStack>
        <VStack alignItems="center">
          <Text bold>Rating</Text>
          <Text>{detailMovie?.adult ? 'PG-18' : 'PG-13'}</Text>
        </VStack>
      </HStack>

      <Box mt="$7">
        <Heading size="lg" bold>
          Overview
        </Heading>
        <Text size="sm">{detailMovie?.overview}</Text>
      </Box>

      <Box mt="$7">
        <Heading mb="$2" size="lg" bold>
          Cast
        </Heading>
        <CastMovieCarousel data={cast} />
      </Box>

      <Box mt="$7">
        <Heading mb="$2" size="lg" bold>
          Similar Movies
        </Heading>
        <SimilarMoviesCarousel data={similarMovies} />
      </Box>
    </View>
  );
}

export default MovieDetailSection;
