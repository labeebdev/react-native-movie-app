import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { screenWidth } from 'helpers/CONST';

import { CastEntity } from 'src/types/movieCredit';
import CastItemCard from 'components/Card/CastItemCard';

interface PropsType {
  data: CastEntity[];
}

function CastMovieCarousel({ data }: PropsType) {
  return (
    <Carousel
      keyExtractor={item => String(item.id)}
      data={data.slice(0, 12)}
      renderItem={({ item }) => (
        <CastItemCard
          handleClick={() => {
            // navigation.navigate('MovieDetail', { id: item.id });
          }}
          item={item}
        />
      )}
      activeSlideAlignment="start"
      firstItem={0}
      inactiveSlideOpacity={1}
      sliderWidth={screenWidth}
      itemWidth={screenWidth / 4.1}
      disableIntervalMomentum
      enableMomentum
      decelerationRate="fast"
    />
  );
}

export default CastMovieCarousel;
