import React from 'react';
import { HStack, Box, Text, Center, Pressable } from '@gluestack-ui/themed';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';

function CHeader() {
  return (
    <HStack mt="$3" space="sm" h={60}>
      <Box alignItems="start" justifyContent="center" w={100} flex={1}>
        <Text size="md" bold>
          Movie APP
        </Text>
      </Box>
      <Center w={50}>
        <Pressable>
          <MagnifyingGlassIcon color="black" size={30} />
        </Pressable>
      </Center>
    </HStack>
  );
}

export default CHeader;
