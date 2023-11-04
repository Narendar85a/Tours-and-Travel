import { Box, Typography } from '@mui/material'
import React from 'react'
import  './Service.css'

const Service = () => {
  return (
      <Box className='service'>
      <Typography variant='h4'>Service</Typography>
      <Typography variant='h5' sx={{fontFamily:'serif'}}>We Provide All types of Sevices</Typography>
      <img src='https://c8.alamy.com/comp/2FMJTG0/lets-travel-world-tour-vector-design-lets-travel-world-tour-text-with-travelling-elements-like-bag-sneakers-and-hat-for-international-2FMJTG0.jpg' alt='' className='service-img' />
    </Box>
    
  )
}

export default Service
