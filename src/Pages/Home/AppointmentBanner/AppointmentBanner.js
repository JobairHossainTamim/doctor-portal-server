import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../img/doctor.png'
import appointment from '../../../img/appointment-bg.png'
import { Button, Typography } from '@mui/material';


const appointmentBg={
    background:`url(${appointment})`,
    backgroundColor:'rgba(45,58,74,0.9)',
    backgroundBlendMode:'darken, luminosity',
    marginTop:175
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
          <img style={{width:400, marginTop:-110}} src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'flex-start',textAlign:'left', alignItems:'center'}}>
                <Box>
                <Typography variant="h3" sx={{mb:5}} style={{color:"#5CE7CD"}} > Appointment      </Typography>

          <Typography variant="h4" sx={{mb:4}}  style={{color:"white"}} > Make in Appointment Today     </Typography>

          <Typography variant="h6" sx={{mb:1}} style={{color:'white',fontSize:14, fontWeight:300}}  > Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, suscipit corporis! Recusandae, repellat facilis labore perferendis harum atque aliquid illo. Make in Appointment Today     </Typography>

          <Button variant="contained">Learn More</Button>
                </Box>
          </Grid>
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;