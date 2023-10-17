import { CastEntity } from 'src/types/movieCredit';
import { Center, Image, Pressable, Text } from '@gluestack-ui/themed';
import { fallbackMoviePoster, image185 } from 'src/api/base';
import React from 'react';

interface PropsType {
  item: CastEntity;
  handleClick: () => void;
}

function CastItemCard({ item, handleClick }: PropsType) {
  return (
    <Pressable onPress={() => handleClick()}>
      <Image
        alt={item.name}
        source={{ uri: image185(item.profile_path) || fallbackMoviePoster }}
        borderRadius="$full"
        style={{
          width: 85,
          height: 85,
        }}
      />
      <Center mt="$2">
        <Text size="md">{item.name}</Text>
      </Center>
    </Pressable>
  );
}

export default CastItemCard;
