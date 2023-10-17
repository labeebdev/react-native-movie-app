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
import { NowShowingMoviesResults } from 'src/types/fetchMovies';

interface PropsType {
  data: NowShowingMoviesResults[];
}

function NowShowingSection({ data }: PropsType) {
  return (
    <View>
      <HStack>
        <Box alignItems="start" justifyContent="center" flex={1}>
          <Heading size="lg">Now Showing</Heading>
        </Box>
        <Box>
          <Button
            size="xs"
            variant="outline"
            action="secondary"
            borderRadius="$full">
            <ButtonText>Show All</ButtonText>
          </Button>
        </Box>
      </HStack>

      <View mt="$4">
        <ShowingMoviesCarousel data={data} />
      </View>
    </View>
  );
}

export default NowShowingSection;
