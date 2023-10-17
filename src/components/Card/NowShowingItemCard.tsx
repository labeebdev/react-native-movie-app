import {
  Box,
  Heading,
  HStack,
  Image,
  Pressable,
  Text,
} from '@gluestack-ui/themed';
import { fallbackMoviePoster, image500 } from 'src/api/base';
import React from 'react';
import { NowShowingMoviesResults } from 'src/types/fetchMovies';
import { screenHeight, screenWidth } from 'helpers/CONST';
import { StarIcon } from 'react-native-heroicons/solid';
import COLORS from 'helpers/colors';

interface MovieCardProps {
  item: NowShowingMoviesResults;
  handleClick: (item: NowShowingMoviesResults) => void;
}

function NowShowingItemCard({ item, handleClick }: MovieCardProps) {
  return (
    <Pressable onPress={() => handleClick(item)}>
      <Image
        source={{ uri: image500(item.poster_path) || fallbackMoviePoster }}
        alt={item.title}
        borderRadius="$3xl"
        style={{
          width: screenWidth * 0.6,
          height: screenHeight * 0.35,
        }}
      />
      <Box ml="$2" mt="$2">
        <Heading size="md">{item.title}</Heading>
        <HStack alignItems="center" space="xs">
          <StarIcon fill={COLORS.star} size={18} />
          <Text>{item.vote_average}/10</Text>
        </HStack>
      </Box>
    </Pressable>
  );
}

export default NowShowingItemCard;
