import { ScrollView } from '@gluestack-ui/themed';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface PropsType {
  children: React.ReactNode;
  // eslint-disable-next-line react/require-default-props
  fluid?: boolean;
}

function RootLayout({ children, fluid = false }: PropsType) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle="default" />
      <ScrollView bg="$secondary0" flex={1} px={fluid ? '$0' : '$3'}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

export default RootLayout;
