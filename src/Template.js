import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Template'
export default function Template(props) {
  const {title , txt1 , txt2 , txt3 , gitUrl , deployedUrl } = props.value
  return (
    <Card  sx={{ 
      maxWidth: 500 , border: 1 , borderRadius: '16px' , 
      borderSpacing: 3 }}>
    <CardContent>
      <Typography sx={{ mb: 1.5  , fontSize: 20}} color="text.secondary" >
        {title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Description
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary">
        {txt1}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {txt2}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {txt3}
      </Typography>
    </CardContent>
    <CardActions>
      <Button href={deployedUrl} target="_blank">Deployed Url</Button>
      <Button href={gitUrl} target="_blank">Source Code</Button>
    </CardActions>
  </Card>
  )
}