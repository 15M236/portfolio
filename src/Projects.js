import React from 'react'
import Template from './Template'
import Box from '@mui/material/Box';
import './Projects'
export default function Projects() {
  
  const projects = [
    {
      title : "Inventory",
      gitUrl : "https://github.com/15M236/capstone-fsd",
      deployedUrl : "https://zippy-froyo-4c9c24.netlify.app/",
      txt1 : "This application developes bills according to the purchase which we made",
      txt2 : "Admin can add a new product or delete old product from list",
      txt3 : "Generated bills will be stored in database",
      stack : "Authentication (OAuth / JWT) , CRUD Operations , Authorization (Admin Control & Permission) , Node with MySQL and MongoDB"
    },
    {
      title : "CRM App",
      gitUrl : "https://github.com/15M236/CRM-FSD/",
      deployedUrl : "https://stellar-gingersnap-715f0a.netlify.app/",
      txt1 : "This application list of Queries",
      txt2 : "Authorised user can update and solve the ticket",
      txt3 : "Admin and Manager can accept the user request to authorise" ,
      stack : "Authentication (OAuth / JWT) , CRUD Operations , Authorization (Admin Control & Permission) , Node with MySQL and MongoDB"
    },
    {
      title : "Food App",
      gitUrl : "https://github.com/15M236/food-fsd-frontend/",
      deployedUrl : "https://symphonious-bombolone-bb1f11.netlify.app/",
      txt1 : "This application list of Queries",
      txt2 : "Authorised user can update and solve the ticket",
      txt3 : "Admin and Manager can accept the user request to authorise" ,
      stack : "Authentication (OAuth / JWT) , CRUD Operations , Authorization (Admin Control & Permission) , Node with MySQL and MongoDB"
    },
    {
      title : "Mobile App",
      gitUrl : "https://github.com/15M236/mobile-fsd",
      deployedUrl : "https://dapper-churros-f2bca2.netlify.app/",
      txt1 : "This application list of Queries",
      txt2 : "Authorised user can update and solve the ticket",
      txt3 : "Admin and Manager can accept the user request to authorise" ,
      stack : "Authentication (OAuth / JWT) , CRUD Operations , Authorization (Admin Control & Permission) , Node with MySQL and MongoDB"
    }
  ]

  return (
    <>
      <h2 className="mb-5">Projects</h2>
      <Box 
          container
          justify="center"
          justifyContent="space-around"
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginTop: "20px" , marginLeft: "20px"}} 
          sx={{ display : 'grid' , gridTemplateColumns : 'repeat( 2 , 1fr)', rowGap: 1, }}
        >
        {projects.map( (project) => {
          return <Template value={project}/>
        })}
        </Box>
    </>
    
  )
}
