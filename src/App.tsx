import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootProviders from 'components/Providers/RootProviders';
import HomeScreen from 'screens/Home/Home';
import MovieDetail from 'screens/MovieDetail/MovieDetail';
import SearchScreen from 'screens/Search/Search';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type TabStackParams = {
  HomeStack: RootStackParams;
};

export type RootStackParams = {
  Home: undefined;
  Search: undefined;
  MovieDetail: {
    id: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParams>();

function HomeStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator<TabStackParams>();
export default function App() {
  return (
    <RootProviders>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen name="HomeStack" component={HomeStackNavigation} />
        </Tab.Navigator>
      </NavigationContainer>
    </RootProviders>
  );
}
