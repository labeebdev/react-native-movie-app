import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Carousel from 'react-native-snap-carousel';
import { RootStackParams } from 'src/App';
import NowShowingItemCard from 'components/Card/NowShowingItemCard';
import { screenWidth } from 'helpers/CONST';
import { SimilarMoviesResult } from 'src/types/similarMovies';

type NavigationProps = NativeStackNavigationProp<RootStackParams>;

interface PropsType {
  data: SimilarMoviesResult[];
}

function SimilarMoviesCarousel({ data }: PropsType) {
  const navigation = useNavigation<NavigationProps>();

  return (
    <Carousel
      keyExtractor={item => String(item.id)}
      data={data.slice(0, 8)}
      renderItem={({ item }) => (
        <NowShowingItemCard
          handleClick={() => {
            navigation.push('MovieDetail', { id: item.id });
          }}
          item={item}
        />
      )}
      activeSlideAlignment="start"
      firstItem={0}
      inactiveSlideOpacity={0.6}
      sliderWidth={screenWidth}
      itemWidth={screenWidth / 2}
      disableIntervalMomentum
      enableMomentum
      decelerationRate="fast"
    />
  );
}

export default SimilarMoviesCarousel;
