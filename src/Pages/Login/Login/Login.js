import { Container, Grid, TextField, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../img/login.png';

const Login = () => {
    const [loginData, setLoginData]=useState({});
    // On changed
    const handleOnChanged=(e) =>{
            const field=e.target.name;
            const value=e.target.value;
           const newLoginData={...loginData};
           newLoginData[field]=value;
           setLoginData(newLoginData);
    }
    const HandleLogin=(e)=>{
        alert("hellow")
e.preventDefault();
    }
    return (
      <Container>
          <Grid container spacing={2}>
              <Grid item sx={{mt:20}} xs={12} md={6}>
                  <Typography variant="body1" gutterBottom>Login</Typography>
                  <form onSubmit={HandleLogin}>
                      <TextField
                        id="standard-basic"
                         label='Enter Your Email'
                          variant="standard"
                          name="email"
                          onChange={handleOnChanged}
                        sx={{width:"75%" ,m:1}}  
                        />
                      <TextField  
                       sx={{width:"75%" ,m:1}}  
                      id="standard-basic" 
                      label='Enter Your Password'
                      variant="standard" type="password"
                      name="password"
                      onChange={handleOnChanged}
                      ></TextField>
                      <NavLink style={{textDecoration:"none"}} to="/register">
                          <Button variant="text">New User Please ? Register</Button>
                      </NavLink>
                      <Button   sx={{width:"75%" ,m:1}} variant="contained" type="submit">Login</Button>
                  </form>
              </Grid>
              <Grid item xs={12} md={6}>
                  <img style={{width:"100%"}} src={login} alt="" />
              </Grid>

          </Grid>
          
      </Container>
    );
};

export default Login;