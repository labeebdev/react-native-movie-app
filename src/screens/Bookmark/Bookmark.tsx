import React from 'react';
import RootLayout from 'components/Layout/RootLayout';
import { Heading, HStack, Pressable } from '@gluestack-ui/themed';
import { getBookmarkMovies } from 'redux/bookmarkSlice';
import { useAppSelector } from 'redux/hooks';
import { screenWidth } from 'helpers/CONST';
import { FlatList } from 'react-native';
import BookmarkMoviesItemCard from 'components/Card/BookmarkMoviesItemCard';
import { GenresEntity } from 'src/types/detailsMovie';
import { Bars3BottomLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerStackParams } from 'src/App';

type DrawerNavigation = DrawerNavigationProp<DrawerStackParams>;

function BookmarkScreen() {
  const drawer = useNavigation<DrawerNavigation>();
  const state = useAppSelector(getBookmarkMovies);
  return (
    <RootLayout>
      <HStack mt="$5" alignItems="center" space="sm" flex={1}>
        <Pressable onPress={() => drawer.openDrawer()}>
          <Bars3BottomLeftIcon color="black" size={25} />
        </Pressable>
        <Heading size="xl">Bookmark Movies</Heading>
      </HStack>

      {state.length > 0 ? (
        <FlatList
          data={state.slice(0, 12)}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <BookmarkMoviesItemCard
              item={item}
              genres={item.genres as GenresEntity[]}
            />
          )}
          style={{
            marginTop: 20,
            width: screenWidth,
          }}
        />
      ) : undefined}
    </RootLayout>
  );
}

export default BookmarkScreen;
