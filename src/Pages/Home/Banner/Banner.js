import React from 'react';
import bg from '../../../img/bg.png';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import chair from '../../../img/chair.png';
import Grid from '@mui/material/Grid';
import { Button, Typography,Container } from '@mui/material';

const Banner = () => {

    const  BannerBg={
        background:`url(${bg})`,
      
    }

    const VerticalCenter={
        display:'flex', 
        alignItems:'center',
        height:400 
    }
    return (
        <Container style={BannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item style={{...VerticalCenter, textAlign:'left'}} xs={12} md={6}>
            <Box>
                
            <Typography variant='h3' >
            Your New Smile <br/>
            Starts Hear!! 
       </Typography>

       <Typography variant="h6" sx={{my:3 ,fontSize:14, fontWeight:300, color:'gray'}}>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia animi quos doloremque nisi optio laudantium pariatur magnam repellat eum temporibus.
       </Typography>
       <Button variant="contained" style={{backgroundColor:"#5CE7ED"}}>Get Appointment</Button>    
            </Box>       
        </Grid>
        <Grid item xs={12} md={6} style={VerticalCenter}>
         <img style={{width:'450px'}} src={chair} alt="" />
        </Grid>
      
      </Grid>
    </Container>
    );
};

export default Banner;