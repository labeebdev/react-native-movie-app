import { StarIcon } from 'react-native-heroicons/solid';
import COLORS from 'helpers/colors';
import { HStack, Text } from '@gluestack-ui/themed';
import React from 'react';

interface PropsType {
  rating: number;
}

function Rating({ rating }: PropsType) {
  return (
    <HStack alignItems="center" space="xs">
      <StarIcon fill={COLORS.star} size={18} />
      <Text>{rating > 0 ? rating.toFixed(1) : '-'}/10</Text>
    </HStack>
  );
}

export default Rating;
