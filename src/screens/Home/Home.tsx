import React from 'react';
import { Text, View } from '@gluestack-ui/themed';

function HomeScreen() {
  return (
    <View p="$4">
      <Text>HomeScreen</Text>
      <Text>API KEY: {process.env.REACT_APP_TMDB_KEY}</Text>
    </View>
  );
}

export default HomeScreen;
