import React from 'react';
import { HStack, Box, Text, Center, Pressable } from '@gluestack-ui/themed';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from 'src/App';
import { useNavigation } from '@react-navigation/native';

type NavigationProps = NativeStackNavigationProp<RootStackParams>;

function CHeader() {
  const navigation = useNavigation<NavigationProps>();
  return (
    <HStack mt="$3" space="sm" h={60}>
      <Box alignItems="start" justifyContent="center" w={100} flex={1}>
        <Text size="md" bold>
          Movie APP
        </Text>
      </Box>
      <Center w={50}>
        <Pressable onPress={() => navigation.navigate('Search')}>
          <MagnifyingGlassIcon color="black" size={30} />
        </Pressable>
      </Center>
    </HStack>
  );
}

export default CHeader;
