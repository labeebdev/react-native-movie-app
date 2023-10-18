import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

function RootProviders({ children }: { children: React.ReactNode }) {
  return (
    <GluestackUIProvider config={config}>
      <Provider store={store}>{children}</Provider>
    </GluestackUIProvider>
  );
}

export default RootProviders;
