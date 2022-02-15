import React from 'react';

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/material';
import LocalizationProvider from '@mui/material';
import StaticDatePicker from '@mui/material';
const Calender = ({date, setDate}) => {
   
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
  <StaticDatePicker
    displayStaticWrapperAs="desktop"
    value={date}
    onChange={(newValue) => {
      setDate(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider>
    );
};

export default Calender;