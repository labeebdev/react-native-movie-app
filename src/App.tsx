import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootProviders from 'components/Providers/RootProviders';
import HomeScreen from 'screens/Home/Home';
import MovieDetail from 'screens/MovieDetail/MovieDetail';
import SearchScreen from 'screens/Search/Search';
import BookmarkScreen from 'screens/Bookmark/Bookmark';
import {
  HomeIcon as HomeIconOutline,
  BookmarkIcon as BookmarkIconOutline,
} from 'react-native-heroicons/outline';
import {
  HomeIcon as HomeIconSolid,
  BookmarkIcon as BookmarkIconSolid,
} from 'react-native-heroicons/solid';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ShowAllNowScreen from 'screens/ShowAllNow/ShowAllNow';
import ShowAllPopularScreen from 'screens/ShowAllPopular/ShowAllPopular';

export type DrawerStackParams = {
  HomeStack: NavigatorScreenParams<RootStackParams>;
  Bookmark: undefined;
  MovieDetail: {
    id: number;
  };
};

export type RootStackParams = {
  Home: undefined;
  Search: undefined;
  ShowAllNow: undefined;
  ShowAllPopular: undefined;
  MovieDetail: {
    id: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParams>();

const Drawer = createDrawerNavigator<DrawerStackParams>();
function DrawerStackNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size, focused }) =>
            focused ? (
              <HomeIconSolid color={color} size={size * 1.3} />
            ) : (
              <HomeIconOutline color={color} size={size * 1.3} />
            ),
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          drawerIcon: ({ color, size, focused }) =>
            focused ? (
              <BookmarkIconSolid color={color} size={size * 1.3} />
            ) : (
              <BookmarkIconOutline color={color} size={size * 1.3} />
            ),
          drawerLabel: 'Bookmark',
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <RootProviders>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={DrawerStackNavigation} />
          <Stack.Screen name="MovieDetail" component={MovieDetail} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="ShowAllNow" component={ShowAllNowScreen} />
          <Stack.Screen
            name="ShowAllPopular"
            component={ShowAllPopularScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RootProviders>
  );
}
