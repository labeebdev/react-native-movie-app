import { View } from '@gluestack-ui/themed';
import React from 'react';
import ShowingMoviesCarousel from 'components/Carousel/ShowingMoviesCarousel';
import { NowShowingMoviesResults } from 'src/types/nowShowingMovies';
import HeaderSection from 'components/Header/HeaderSection';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from 'src/App';

interface PropsType {
  data: NowShowingMoviesResults[];
}

function NowShowingSection({ data }: PropsType) {
  const stack = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View>
      <HeaderSection
        title="Now Showing"
        onPress={() => {
          stack.navigate('ShowAllNow');
        }}
      />

      <View mt="$4">
        <ShowingMoviesCarousel data={data} />
      </View>
    </View>
  );
}

export default NowShowingSection;
