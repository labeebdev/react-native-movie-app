import { PopularMovieResults } from 'src/types/popularMovies';
import {
  Heading,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import { fallbackMoviePoster, image342 } from 'src/api/base';
import { screenWidth } from 'helpers/CONST';
import { StarIcon } from 'react-native-heroicons/solid';
import COLORS from 'helpers/colors';
import { Genres } from 'src/types/genresMovies';
import GenreItemCard from 'components/Card/GenreItemCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from 'src/App';
import Rating from 'components/Rating/Rating';

interface PropsType {
  item: PopularMovieResults;
  genres: Genres[];
}

type NavigationProps = NativeStackNavigationProp<RootStackParams>;

const widthImage = screenWidth / 3.25;

function PopularMoviesItemCard({ item, genres }: PropsType) {
  const navigation = useNavigation<NavigationProps>();

  const genreNames = item?.genre_ids?.map(genreId => {
    const matchedGenre = genres.find(genre => genre.id === genreId);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return matchedGenre ? matchedGenre.name : undefined;
  });

  return (
    <Pressable
      mb="$5"
      w={screenWidth}
      onPress={() => {
        navigation.navigate('MovieDetail', { id: item.id });
      }}>
      <HStack space="sm">
        <Image
          source={{ uri: image342(item.poster_path) || fallbackMoviePoster }}
          alt={item.original_title}
          w={widthImage}
          h={widthImage * 1.5}
          borderRadius="$lg"
        />

        <VStack flex={1} space="xs">
          <Heading size="sm" w="90%">
            {item.original_title} ({item.release_date.split('-')[0]})
          </Heading>

          <Rating rating={item.vote_average} />

          <HStack space="sm">
            {genreNames
              ?.slice(0, 3)
              .map((genreName, idx) => (
                <GenreItemCard key={idx} genreName={genreName as string} />
              ))}
          </HStack>

          <Text mt="$2" w="90%" size="sm">
            {item.overview.length > 100
              ? `${item.overview.slice(0, 99)}...`
              : item.overview}
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
}

export default PopularMoviesItemCard;
