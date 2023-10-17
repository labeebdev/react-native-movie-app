import { Box, Text } from '@gluestack-ui/themed';
import React from 'react';

interface PropsType {
  genreName: string;
}
function GenreItemCard({ genreName }: PropsType) {
  return (
    <Box bg="$primary50" py="$0.5" px="$2" borderRadius="$xl">
      <Text size="xs" style={{ color: '#004282' }}>
        {genreName}
      </Text>
    </Box>
  );
}

export default GenreItemCard;
