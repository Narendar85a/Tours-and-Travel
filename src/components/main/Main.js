import React, { useState } from 'react';
import './Main.css'
import { Box, Typography } from '@mui/material';
import video1 from '../../assert/video1.mp4'

const Main = () => {

  const [detail, setDetail] = useState({name:'', date:'', range:''});

  const handleChange = (e) => {
     setDetail({...detail, [e.target.name]: e.target.value});
     console.log(detail);
  }

  return (
    <Box className="home">
    <Box className='overlay'></Box>
    <video src={video1} autoPlay loop muted className='video1'/>

    <Box className='home-box1'>
      <Typography variant='p'>Our Packages</Typography>
      <Typography variant='h4'>Search Your Destination</Typography>
      
      <form className='home-box2'>
        <div>
          <label for='search'>Search your Destination</label><br/>
          <input type='text' placeholder='search name...' name='name' value={detail.name} onChange={handleChange}/>
        </div>
        <div>
          <label for='date'>Search Date</label><br/>
          <input type='date' name='Date' value={detail.date} onChange={handleChange}/>
        </div>
        <div>
         <label for='price'>Max Price:$5000</label><br/>
         <input type='range' max={5000} min={100} name='range' value={detail.range} onChange={handleChange}/>
        </div>
      </form>
    </Box>

    </Box>
  )
}

export default Main