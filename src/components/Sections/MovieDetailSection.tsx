import React from 'react';
import Styles from 'screens/MovieDetail/style';
import { Box, Heading, HStack, Text, View, VStack } from '@gluestack-ui/themed';
import { BookmarkIcon } from 'react-native-heroicons/outline';
import Rating from 'components/Rating/Rating';
import GenreItemCard from 'components/Card/GenreItemCard';
import CastMovieCarousel from 'components/Carousel/CastMovieCarousel';
import { MovieDetailsResponse } from 'src/types/detailsMovie';
import { CastEntity } from 'src/types/movieCredit';
import { SimilarMoviesResult } from 'src/types/similarMovies';
import SimilarMoviesCarousel from 'components/Carousel/SimilarMoviesCarousel';

interface PropsType {
  detailMovie: MovieDetailsResponse | undefined;
  cast: CastEntity[];
  similarMovies: SimilarMoviesResult[];
}

function MovieDetailSection({ detailMovie, cast, similarMovies }: PropsType) {
  return (
    <View bg="$secondary0" flex={1} px="$5" py="$4" style={Styles.container}>
      <HStack
        space="sm"
        bg="$secondary50"
        pr="$4"
        alignItems="start"
        justifyContent="space-between">
        <Heading size="xl" w="85%">
          {detailMovie?.title} - ({detailMovie?.id})
        </Heading>
        <BookmarkIcon
          color="black"
          size={26}
          style={{
            marginTop: 5,
          }}
        />
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
