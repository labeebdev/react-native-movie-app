import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Carousel from 'react-native-snap-carousel';
import { RootStackParams } from 'src/App';
import { NowShowingMoviesResults } from 'src/types/fetchMovies';
import NowShowingItemCard from 'components/Card/NowShowingItemCard';
import { screenWidth } from 'helpers/CONST';

type NavigationProps = NativeStackNavigationProp<RootStackParams>;

interface PropsType {
  data: NowShowingMoviesResults[];
}

function ShowingMoviesCarousel({ data }: PropsType) {
  const navigation = useNavigation<NavigationProps>();

  navigation.navigate('Home');

  return (
    <Carousel
      data={data.slice(0, 8)}
      renderItem={({ item }) => (
        <NowShowingItemCard handleClick={() => {}} item={item} />
      )}
      activeSlideAlignment="start"
      firstItem={1}
      inactiveSlideOpacity={0.6}
      sliderWidth={screenWidth}
      itemWidth={screenWidth / 2}
      disableIntervalMomentum
      enableMomentum
      decelerationRate="fast"
    />
  );
}

export default ShowingMoviesCarousel;
