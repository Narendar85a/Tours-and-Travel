import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [send, setSend] = useState({username:'', email:'', nation:'', number:'', message:''});

  const handleChange = (e) => {
    setSend({...send, [e.target.name]: e.target.value});
    // console.log(send);
  }

  const handleSubmit = (e) => {
     e.preventDefault();
     console.log(send);
     setSend({username:'', email:'', nation:'', number:'', message:''})
  }

  return (
    <Box className='contact'>
        <Typography variant='h2'>Contact Us</Typography>
        <Typography variant='h5'>Lets Talk about everything</Typography>
      <Box className='contact-b1'>
        <form onSubmit={handleSubmit}>
          <TextField id="outlined-basic" label="Enter fullname" variant="outlined" className='contact-text' 
            name='username' value={send.username} onChange={handleChange}/><br/><br/> 

          <TextField id="outlined-basic" label="Email" variant="outlined" className='contact-text'
             name='email' value={send.email} onChange={handleChange}/><br/><br/>

          <TextField id="outlined-basic" label="Nation" variant="outlined" className='contact-text' 
              name='nation' value={send.nation} onChange={handleChange}/><br/><br/>

          <TextField id="filled-number" label="Mobile number" variant='outlined' className='contact-text' 
              name='number' value={send.number} onChange={handleChange}/> <br/><br/> 

          <textarea className='contact-textarea' name='message' value={send.message} onChange={handleChange}/><br/><br/>
          <Button variant='outlined' className='contact-btn' type='submit'>send Details</Button>
        </form>
      </Box>
    </Box>
  )
}

export default Contact