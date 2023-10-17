import { ScrollView } from '@gluestack-ui/themed';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle="default" />
      <ScrollView bg="$secondary0" flex={1} px="$3">
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

export default RootLayout;
