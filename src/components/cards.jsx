import { HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';

function Cards() {
  return (
    <HStack
      justifyContent="space-around"
      flexWrap="nowrap"
      spacing={{ base: '2', md: '0', lg: '2' }}
      paddingTop={{ base: '16px', md: '24px' }}
    >
      <Stack
        padding={{ base: '15px', md: '20px' }}
        width={{ base: '100%', md: '450px' }}
        height={{base: "100%", md: "550px"}}
        borderRadius="15px"
        border="1px Solid #2B0AF5"
        // marginBottom={{ base: '16px', md: '0' }}
      >
        <Text
          fontSize={{ base: '18px', md: '22px' }}
          fontWeight="800"
          textAlign="center"
        >
          Taste It!
          <br />
          Feel It!
          <br />
          Love It!
        </Text>
        <Text fontSize={{ base: '16px', md: '18px' }} textAlign="center">
        “Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”
        </Text>
      </Stack>

      <Stack
        bg="#202B8C"
        color="white"
        padding={{ base: '15px', md: '20px' }}
        width={{ base: '100%', md: '450px' }}
        height={{base: "100%", md: "550px"}}
        borderRadius="15px"
        border="1px Solid #2B0AF5"
        // marginBottom={{ base: '16px', md: '0' }}
      >
        <Text
          fontSize={{ base: '18px', md: '22px' }}
          fontWeight="800"
          textAlign="center"
        >
          Taste It!
          <br />
          Feel It!
          <br />
          Love It!
        </Text>
        <Text fontSize={{ base: '16px', md: '18px' }} textAlign="center">
        “Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”
        </Text>
      </Stack>

      <Stack
       padding={{ base: '15px', md: '20px' }}
        width={{ base: '100%', md: '450px' }}
        height={{base: "100%", md: "550px"}}
        borderRadius="15px"
        border="1px Solid #2B0AF5"
      >
        <Text
          fontSize={{ base: '18px', md: '22px' }}
          fontWeight="800"
          textAlign="center"
        >
          Taste It!
          <br />
          Feel It!
          <br />
          Love It!
        </Text>
        <Text fontSize={{ base: '16px', md: '18px' }} textAlign="center">
        “Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”“Food is symbolic of love when words are inadequate.”
        </Text>
      </Stack>
    </HStack>
  );
}

export default Cards;
