import React from 'react';
import { Center, HStack, Pressable, Text } from '@gluestack-ui/themed';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { DrawerStackParams, RootStackParams } from 'src/App';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Bars3BottomLeftIcon } from 'react-native-heroicons/solid';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type DrawerNavigation = DrawerNavigationProp<DrawerStackParams>;
type StackNavigation = NativeStackNavigationProp<RootStackParams>;

function CHeader() {
  const drawer = useNavigation<DrawerNavigation>();
  const stack = useNavigation<StackNavigation>();
  return (
    <HStack mt="$3" space="sm" h={60}>
      <HStack alignItems="center" space="sm" flex={1}>
        <Pressable onPress={() => drawer.openDrawer()}>
          <Bars3BottomLeftIcon color="black" size={25} />
        </Pressable>
        <Text size="xl" bold>
          Movie APP
        </Text>
      </HStack>
      <Center w={50}>
        <Pressable onPress={() => stack.navigate('Search')}>
          <MagnifyingGlassIcon color="black" size={30} />
        </Pressable>
      </Center>
    </HStack>
  );
}

export default CHeader;
