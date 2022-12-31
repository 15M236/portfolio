import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
export default function Contacts() {
    const [visible , setVisible] = useState(false)

    const [record , setRecord] = useState({
        name : "" ,
        email : "" ,
        content : ""
    })
    const {name , email , content} = record
    const apiUrl = "https://portfolio-backend-qxp0.onrender.com"
    const handleChange = (e) => {
        setRecord({ ...record, [e.target.name]: e.target.value })
    }
    const handleSubmit = async() => {
      let res = await axios.post(`${apiUrl}/post-data/`,record)
      console.log(res)
      if(res.data.statusCode===200)
      {
       console.log("Data creation successfully")
      }
        // const timeout = setTimeout(() => {
        //   setVisible(true)
        // }, 3000);
        setVisible(true)
        setRecord({
          name : "" ,
          email : "" ,
          content : ""
      })
      setVisible(false)
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
      { visible && 
      <>
        <h4>Thanks for the message</h4>
      </>}
    </section>
  )
}
