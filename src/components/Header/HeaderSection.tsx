import { Box, Button, ButtonText, Heading, HStack } from '@gluestack-ui/themed';
import React from 'react';

interface PropsType {
  title: string;
  onPress: () => void;
}

function HeaderSection({ onPress, title }: PropsType) {
  return (
    <HStack>
      <Box alignItems="start" justifyContent="center" flex={1}>
        <Heading size="lg">{title}</Heading>
      </Box>
      <Box>
        <Button
          size="xs"
          variant="outline"
          action="secondary"
          borderRadius="$full"
          onPress={onPress}>
          <ButtonText>Show All</ButtonText>
        </Button>
      </Box>
    </HStack>
  );
}
export default HeaderSection;
