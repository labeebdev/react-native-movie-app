import { Box, HStack, Pressable, View } from '@gluestack-ui/themed';
import { TextInput } from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/solid';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from 'src/App';
import { useNavigation } from '@react-navigation/native';

interface PropsType {
  handleTextDebounce: () => void;
}

type NavigationProps = NativeStackNavigationProp<RootStackParams>;

function SearchHeader({ handleTextDebounce }: PropsType) {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View
      pl="$4"
      mt="$5"
      bg="$secondary100"
      borderWidth="$1"
      borderRadius="$full">
      <HStack alignItems="center">
        <Box flex={1}>
          <TextInput
            placeholder="Masukan nama film ..."
            placeholderTextColor="black"
            style={{
              fontSize: 18,
              color: 'black',
            }}
            onChangeText={handleTextDebounce}
          />
        </Box>

        <Pressable
          borderRadius="$full"
          bg="$primary100"
          p="$3"
          onPress={() => navigation.goBack()}>
          <XMarkIcon color="black" size={30} />
        </Pressable>
      </HStack>
    </View>
  );
}

export default SearchHeader;
