import React, { useState } from 'react';
import './Footer.css'
import { Box,Typography,TextField, Button, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import video2 from '../../assert/video2.mp4';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const [send, setSend] = useState('')

  const handleChange = (e) => {
    setSend(e.target.value)
  }

  const handleSend = (e) => {
    e.preventDefault();
    console.log(send);
    setSend('');
  }

  return (
     <Box className='footer'>
      <video src={video2} autoPlay loop muted className='video2'/>

      <Box className='footer-first'>

        <Box className='fb1'>
        <Box>
          <Typography variant='h6'>Keep in Touch</Typography>
          <Typography variant='h4'>Travel with us</Typography>
        </Box>
        <form onSubmit={handleSend} className='fb2'>
          <TextField id="outlined-basic" label="Enter Name" variant="outlined" name='name' value={send} onChange={handleChange} />
          <Button variant="outlined" type='submit' endIcon={<SendIcon />}>Send</Button>
        </form>
        </Box>

        <Box className='footer-second'>
         <Box className='fsb1'>
          <Typography variant='h4' sx={{color:'black'}}>Travel.</Typography>
          <Typography variant='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                   unknown printer took a galley of type and scrambled it to make a type specimen book. 
                   It has survived not only five centuries, but also the leap into electronic typesetting, 
                   remaining essentially unchanged. </Typography>
             <Box>
                <IconButton>
                 <TwitterIcon/>
                </IconButton>
                <IconButton>
                 <FacebookIcon />
                </IconButton>
                <IconButton>
                 <YouTubeIcon/>
                </IconButton>
                <IconButton>
                 <InstagramIcon/>
                </IconButton>
             </Box>
         </Box>

         <Box className='fsb2'>
            <Box className='fsb'>
              <Typography variant='h6' className='fb2-typo'>Our Agency</Typography>
              <span>Services</span>
              <span>Insurance</span> 
              <span>Agency</span> 
              <span>Tourism</span> 
              <span>Payment</span>
            </Box>

            <Box className='fsb'>
              <Typography variant='h6' className='fb2-typo'>Partners</Typography>
              <span>Booking</span>
              <span>Rental Car</span> 
              <span>HostelWorld</span> 
              <span>Trivago</span> 
              <span>TripAdvisor</span>
            </Box>

            <Box className='fsb'>
              <Typography variant='h6' className='fb2-typo'>Last Minute</Typography>
              <span>India</span>
              <span>London</span> 
              <span>Europe</span> 
              <span>Indonesia</span> 
              <span>Australia</span>
            </Box>
         </Box>

      </Box>
      </Box>
      
     </Box>
  )
}

export default Footer