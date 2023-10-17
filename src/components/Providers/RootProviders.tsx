import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

function RootProviders({ children }: { children: JSX.Element }) {
  return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>;
}

export default RootProviders;
