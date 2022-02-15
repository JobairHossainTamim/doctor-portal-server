import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import fluoride from '../../../img/fluoride.png';
import Cavity from '../../../img/cavity.png';
import whitening from '../../../img/whitening.png';
import Container from '@mui/material/Container';
import Service from './../Service/Service';
import Typography  from '@mui/material/Typography';
const service=[
    {
        name:"Floured Treatment ",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem molestiae commodi, error iusto numquam deleniti, ullam, quo hic soluta dolorum sequi assumenda nihil dolorem repellendus dolore. Excepturi, quae earum.",
        img: fluoride
    }
    ,
    {
        name:"Cavity Treatment ",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem molestiae commodi, error iusto numquam deleniti, ullam, quo hic soluta dolorum sequi assumenda nihil dolorem repellendus dolore. Excepturi, quae earum.",
        img: Cavity
    }
    ,
    {
        name:"whitening Treatment ",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem molestiae commodi, error iusto numquam deleniti, ullam, quo hic soluta dolorum sequi assumenda nihil dolorem repellendus dolore. Excepturi, quae earum.",
        img: whitening
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>

        <Container>
            <Typography sx={{fontWeight:500 ,color :'success.main' , m:2}} variant="h4" component="div">
Our Services
            </Typography>
            <Typography sx={{fontWeight:500 , m:4}} variant="h3" component="div">
What we provide ?
            </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {service.map(service=><Service key={service.name} service={service}></Service>)}
      </Grid>
     </Container>
    </Box>
       
    
    );
};

export default Services;