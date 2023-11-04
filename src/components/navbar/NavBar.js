import React from 'react';
import './NavBar.css'
import { AppBar, Box, Toolbar, Button, IconButton } from '@mui/material'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
// import AppsIcon from '@mui/icons-material/Apps';
import { Link } from 'react-router-dom';
import Destination from '../navfolder/Destination'


const NavBar = () => {
  return (
    <AppBar className='navbar'>
        <Toolbar className='navbar-container'>
            <Box className='nav-box1'>
          <Link to='/'>
            <IconButton>
            <TravelExploreIcon/>
            </IconButton>
            <Button variant='text'>Travel</Button>
            </Link>
            </Box>
          
        
            <Box className='nav-box2'>
            <Link to='/'>
              <Button className='nav-btn'>Home</Button>
            </Link>
            <Link to='/about'>
              <Button  className='nav-btn'>About</Button>
            </Link>
            <Link to='/service'>
              <Button className='nav-btn'>Service</Button>
            </Link>
              <Destination/>
            <Link to='/contact'>
              <Button  className='nav-btn'>Contact</Button>
            </Link>
            <Link to='/booking'>
              <Button variant="outlined" sx={{borderRadius:'20px',}} className='nav-btn'>Book Now</Button>
            </Link>
            </Box>
            {/* <IconButton>
             <AppsIcon/>
            </IconButton> */}
        </Toolbar>
    </AppBar>
  )
}

export default NavBar