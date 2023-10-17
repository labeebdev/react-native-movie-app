import React from 'react';
import { Text } from '@gluestack-ui/themed';
import RootLayout from 'components/Layout/RootLayout';
import Header from 'components/Header/Header';

function HomeScreen() {
  return (
    <RootLayout>
      <Header />
      <Text>HomeScreen</Text>
      <Text>API KEY: {process.env.REACT_APP_TMDB_KEY}</Text>
    </RootLayout>
  );
}

export default HomeScreen;
