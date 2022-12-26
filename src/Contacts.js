import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function Contacts() {
    const [record , setRecord] = useState({
        name : "" ,
        email : "" ,
        content : ""
    })
    const {name , email , content} = record

    const handleChange = (e) => {
        setRecord({ ...record, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        console.log(record)
    }
  return (
    <section className='contact-form'>
      <h2 className='mb-5'>Contact Me</h2>
      <div className='details-form'>
      <TextField 
      sx={{ m: 1, width: '30ch' }} 
      label="Name" value={name} 
      onChange={handleChange} 
      name = "name" variant="outlined" />
      <br/>
      <TextField 
      sx={{ m: 1, width: '30ch'}} 
      label="Gmail" 
      value={email} 
      onChange={handleChange} 
      name = "email" variant="outlined" />
      <br/>
      <TextField 
      sx={{ m: 1, width: '50ch' }} 
      id="outlined-textarea" 
      value={content} 
      name = "content" label="How can I Help you" 
      onChange={handleChange} multiline/><br/>
      
      <Button 
      sx={{ m: 1}} variant="contained" 
      onClick={handleSubmit}>Submit</Button>
      </div>
    </section>
  )
}
