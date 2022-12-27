import React from 'react'
import Template from './Template'
import Grid from '@mui/material/Grid';
import './Projects'
export default function Projects() {
  
  const projects = [
    {
      title : "Inventory",
      gitUrl : "https://github.com/15M236/capstone-fsd",
      deployedUrl : "https://zippy-froyo-4c9c24.netlify.app/",
      txt1 : "This application developes bills according to the purchase which we made",
      txt2 : "Admin can add a new product or delete old product from list",
      txt3 : "Generated bills will be stored in database"
    },
    {
      title : "CRM App",
      gitUrl : "https://github.com/15M236/CRM-FSD/",
      deployedUrl : "https://stellar-gingersnap-715f0a.netlify.app/",
      txt1 : "This application list of Queries",
      txt2 : "Authorised user can update and solve the ticket",
      txt3 : "Admin and Manager can accept the user request to authorise"
    }
  ]

  return (
    <>
      <h2 className="mb-5">Projects</h2>
      <Grid 
          container
          justify="center"
          spacing={2}
          style={{ marginTop: "50px" , marginLeft: "50px"}} 
          sx={{ display : 'grid' , gridTemplateColumns : 'repeat( 2 , 1fr)' , gap : '1rem'}}
        >
        {projects.map( (project) => {
          return <Template value={project}/>
        })}
        </Grid>
    </>
    
  )
}
