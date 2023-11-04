import { Box, Typography } from '@mui/material'
import React from 'react';
import './About.css'

const About = () => {
  return (
    <Box className='about'>
      <img src='https://img.freepik.com/premium-photo/travel-world-monuments-concept_117023-14.jpg' alt='' className='about-img' />
    <Box className='about-b1'>
         <Typography variant='h4'>About Us</Typography>
      <Typography variant='p'>Serendipitously, after saving up every penny that we had, we both set off on a 
          life-changing solo backpacking trip and met each other along the way. Since then, we have traveled 
          to countless countries and four continents together. Not knowing what to expect 
          (or how to even run a travel blog), we started Adventure in You mainly because we wanted to stay 
          connected to something that we loved which was traveling. Little did we know that starting a travel 
          blog together would end up changing our lives as it has ultimately given us the freedom to work and 
          live from anywhere in the world.
     </Typography>

     <Typography variant='p'>
        Urban Travel Blog is a collective blog of expert travel writers, headed up by experienced travel 
          journalist and editor Duncan Rhodes, who report on trends, experiences, festivals and nocturnal 
          adventures in cities around Europe and the world. We publish lovingly-compiled ‘Long Weekend’ city 
          guides to all our favourite destinations, as well as fresh and insightful feature articles on the 
          quirkiest crazes, the most intriguing experiences and the best nightlife our boundless curiosity 
          can uncover. (Just hover you mouse over the “Adventures” tab on our top menu to browse recent posts 
          by category). And because everyone needs to smell the flowers – and not the coffee – once in a 
          while, we like to offset our urban Odysseys with the occasional jaunt in the great outdoors in our 
          Escape section.
     </Typography>
    </Box>
      
          
     
    </Box>
  )
}

export default About