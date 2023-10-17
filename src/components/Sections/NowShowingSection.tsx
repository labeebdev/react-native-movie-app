import {
  Box,
  Button,
  ButtonText,
  Heading,
  HStack,
  Text,
  View,
} from '@gluestack-ui/themed';
import React from 'react';
import ShowingMoviesCarousel from 'components/Carousel/ShowingMoviesCarousel';
import { NowShowingMoviesResults } from 'src/types/nowShowingMovies';
import HeaderSection from 'components/Header/HeaderSection';

interface PropsType {
  data: NowShowingMoviesResults[];
}

function NowShowingSection({ data }: PropsType) {
  return (
    <View>
      <HeaderSection title="Now Showing" onPress={() => {}} />

      <View mt="$4">
        <ShowingMoviesCarousel data={data} />
      </View>
    </View>
  );
}

export default NowShowingSection;
