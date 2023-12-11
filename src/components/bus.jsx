import React from 'react';
import styled from 'styled-components';
import bg from '../assets/busog.jpeg';
import { Box, Text } from '@chakra-ui/react';

function BusOg() {
  const BG = styled.div`
    margin-top: 20px;

    position: absolute;
    background-image: url(${bg});
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
  `;
  const AnimatedBox = styled(Box)`
    opacity: 0;
    animation: fadeIn 1s ease-out forwards;

    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }
  `;

  return (
    <>
      <BG>
        <AnimatedBox
          w={{ base: '100%', md: '100vw', lg: '100vw' }}
          padding={{ base: '20px', md: '50px', lg: '80px' }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            w="60%"
            minH="400px"
            bg="rgba(0, 0, 0, 0.6)"
            textAlign="center"
            padding="20px"
            margin="50px"
          >
            <Text
              color="#DB2B2B"
              fontSize={{ base: '30px', md: '40px', lg: '50px' }}
              fontWeight="700"
            >
              Our Story
            </Text>
            <br />
            <Text
              color="white"
              textAlign="center"
              lineHeight={{ base: '1.5', md: '2', lg: '2.5' }}
              fontSize={{ base: '16px', md: '20px', lg: '24px' }}
            >
             Food Bus of India: Redefining Dining Experiences Step into the future of dining with Food Bus of India, an avant-garde concept that reshapes the way people encounter hospitality. We're more than a mere restaurant; we're a culinary unmatched hit untendelight of exquisite cuisine with an unmatched dining adventure
            </Text>
          </Box>
        </AnimatedBox>
      </BG>
    </>
  );
}

export default BusOg;
