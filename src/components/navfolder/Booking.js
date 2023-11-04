import { Box, Typography, TextField, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, Select, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { country } from '../../data';
import './Booking.css'

const Booking = () => {
 const [booking, setBooking] = useState({firstname:'', lastname:'', email:'', select:'', number:'', amount:'' })

 const handleBooking = (e) => {
   setBooking({...booking, [e.target.name]: e.target.value});
//    console.log(booking);
 }

 const handleSubmitBooking = (e) => {
   e.preventDefault();
   console.log(booking);
   alert('Booking confirmed')
   setBooking({firstname:'', lastname:'', email:'', select:'', number:'', amount:'' })
 }
    
  return (
   <Box className='amount'>
    <Typography variant='h4'>Book Now</Typography>
    <Box className='amount-b2'>
              <form onSubmit={handleSubmitBooking} className='amount-form'>
                <TextField id="outlined-basic" label="firstname" variant="outlined" className='amount-text' 
                       name='firstname' value={booking.firstname} onChange={handleBooking}/> 

                <TextField id="outlined-basic" label="lastname" variant="outlined" className='amount-text' 
                       name='lastname' value={booking.lastname} onChange={handleBooking}/>

                <TextField id="outlined-basic" label="Email" variant="outlined" className='amount-text'
                       name='email' value={booking.email} onChange={handleBooking}/>

                <Typography variant='caption'>Select country</Typography>
                <select className='amount-select' name='select' value={booking.select} onChange={handleBooking}>
                    {
                        country.map((countries) => (
                            <option className='amount-option'>{countries}</option>
                        ))
                    }
                </select>

                <TextField id="filled-number" label="Mobile number" variant='outlined' className='amount-text' 
                      name='number' value={booking.number} onChange={handleBooking}/> 

                <TextField id="outlined-basic" label="Amount" variant="outlined" className='amount-text'
                   InputProps={{
                 startAdornment: <InputAdornment position="start">$</InputAdornment>
                  }}
                       name='amount' value={booking.amount} onChange={handleBooking}/>

                <Button variant='outlined' className='amount-btn' type='submit'>Book Now</Button>
              </form>
            </Box>
   </Box>
  )
}

export default Booking