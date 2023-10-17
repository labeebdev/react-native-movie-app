import { screenHeight, screenWidth } from 'helpers/CONST';
import { Center, Image, Pressable, View } from '@gluestack-ui/themed';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { fallbackMoviePoster, image500 } from 'src/api/base';
import React from 'react';
import { MovieDetailsResponse } from 'src/types/detailsMovie';

interface PropsType {
  onPress: () => void;
  detailMovie: MovieDetailsResponse | undefined;
}
function MovieDetailHeader({ detailMovie, onPress }: PropsType) {
  return (
    <View w={screenWidth}>
      <Center position="absolute" zIndex={20} ml="$2" mt="$2">
        <Pressable
          onPress={onPress}
          p="$2"
          bg="$secondary700"
          borderRadius="$full">
          <ChevronLeftIcon fill="white" size={30} />
        </Pressable>
      </Center>
      <View>
        <Image
          source={{
            uri: image500(detailMovie?.poster_path) || fallbackMoviePoster,
          }}
          alt={detailMovie?.original_title}
          resizeMode="cover"
          style={{ width: screenWidth, height: screenHeight * 0.3 }}
        />
      </View>
    </View>
  );
}
export default MovieDetailHeader;
