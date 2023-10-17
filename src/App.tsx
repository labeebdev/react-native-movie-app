import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootProviders from 'components/Providers/RootProviders';
import HomeScreen from 'screens/Home/Home';
import MovieDetail from 'screens/MovieDetail/MovieDetail';
import SearchScreen from 'screens/Search/Search';

export type RootStackParams = {
  Home: undefined;
  Search: undefined;
  MovieDetail: {
    id: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <RootProviders>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="MovieDetail" component={MovieDetail} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RootProviders>
  );
}
