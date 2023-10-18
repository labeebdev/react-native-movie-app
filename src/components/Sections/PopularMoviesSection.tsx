import { View } from '@gluestack-ui/themed';
import React from 'react';
import { PopularMovieResults } from 'src/types/popularMovies';
import { FlatList } from 'react-native';
import HeaderSection from 'components/Header/HeaderSection';
import PopularMoviesItemCard from 'components/Card/PopularMoviesItemCard';
import { screenWidth } from 'helpers/CONST';
import { useAppSelector } from 'redux/hooks';
import { getGenre } from 'redux/genreSlice';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from 'src/App';

interface PropsType {
  data: PopularMovieResults[];
}

function PopularMoviesSection({ data }: PropsType) {
  const genres = useAppSelector(getGenre);
  const stack = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View>
      <HeaderSection
        title="Popular Movies"
        onPress={() => {
          stack.navigate('ShowAllPopular');
        }}
      />
      <FlatList
        data={data.slice(0, 5)}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <PopularMoviesItemCard item={item} genres={genres} />
        )}
        style={{
          marginTop: 20,
          width: screenWidth,
        }}
      />
    </View>
  );
}

export default PopularMoviesSection;
