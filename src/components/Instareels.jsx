import { Box, HStack, Img, LinkOverlay } from '@chakra-ui/react'
import { AspectRatio } from '@chakra-ui/react'
import React from 'react'
import Insta1 from '../assets/InstaReels/Instagram 1.mp4'
import Insta2 from '../assets/InstaReels/Instagram 2.mp4'
import Insta3 from '../assets/InstaReels/Instagram 3.mp4'
import Insta4 from '../assets/InstaReels/Instagram 4.mp4'
import Insta5 from '../assets/InstaReels/Instagram 5.mp4'
// import reel from '../assets/instareel.png'
function Instareels() {
  return (
    <HStack padding="20" margin="60px" spacing="20px" bg="#000">
        {/* <LinkOverlay href='https://www.instagram.com/reel/Cypqmi_vJbl/?hl=en'>
        <Img src={reel} />
        </LinkOverlay> */}
        <Box h="55vh" w="20%" bg="#fff">
          <video src={Insta1}  controls>
          </video>
        
        </Box>
        <Box h="55vh" w="20%" bg="#fff">
        <video src={Insta2}  controls>
        </video>
        </Box>
        <Box h="55vh" w="20%" bg="#fff">
        <video src={Insta3}  controls>
        </video>
        </Box>
        <Box h="55vh" w="20%" bg="#fff">
        <video src={Insta4}  controls>
        </video>
        </Box>
        <Box h="55vh" w="20%" bg="#fff">
        <video src={Insta5}  controls>
        </video>
        </Box>
        

    </HStack>
  )
}

export default Instareels