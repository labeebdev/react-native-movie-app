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
import GenreItemCard from 'components/Card/GenreItemCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Rating from 'components/Rating/Rating';
import { BookmarkPayload } from 'redux/bookmarkSlice';
import { GenresEntity } from 'src/types/detailsMovie';
import { RootStackParams } from 'src/App';

interface PropsType {
  item: BookmarkPayload;
  genres: GenresEntity[];
}

type NavigationProps = NativeStackNavigationProp<RootStackParams>;

const widthImage = screenWidth / 3.25;

function BookmarkMoviesItemCard({ item, genres }: PropsType) {
  const navigation = useNavigation<NavigationProps>();

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
          alt={item.title}
          w={widthImage}
          h={widthImage * 1.5}
          borderRadius="$lg"
        />

        <VStack flex={1} space="xs">
          <Heading size="sm" w="90%">
            {item.title} ({item?.release_date?.split('-')[0]})
          </Heading>

          <Rating rating={item.rating as number} />

          <HStack space="sm">
            {genres
              ?.slice(0, 3)
              .map(genre => (
                <GenreItemCard key={genre.id} genreName={genre.name} />
              ))}
          </HStack>

          {item.overview && (
            <Text mt="$2" w="90%" size="sm">
              {item?.overview?.length > 100
                ? `${item.overview.slice(0, 99)}...`
                : item.overview}
            </Text>
          )}
        </VStack>
      </HStack>
    </Pressable>
  );
}

export default BookmarkMoviesItemCard;
