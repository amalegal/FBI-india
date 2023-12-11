import React from 'react';
import { Img, Box, useAnimation } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Cup from '../assets/cup-removebg-preview.png';
import Desert from '../assets/Untitled-removebg-preview.png';
import Bowl from '../assets/222-removebg-preview.png';
import Glass from '../assets/glass-removebg-preview.png';
import Pizza from '../assets/anda-removebg-preview.png';
import menu1 from '../assets/menu.png';

function MenuCard() {
  return (
    <Box>
      {/* Icon at the top */}
  

    
   

  

      {/* Image */}
      <Img w="100%" src={menu1} alt="Menu" />
    </Box>
  );
}

export default MenuCard;
