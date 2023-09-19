import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './style.css';

export default function SelectDays({days,handleDaysChange}) {

  return (
    <div className='days'>
        <Select
            sx={{
                height:"2.5rem",
                color:"var(--white)",
                marginBottom:"2rem",
                "& .MuiOutlinedInput-notchedOutline":{
                    borderColor:"var(--white)",
                },
                "& .MuiSvgIcon-root":{
                    color:"var(--white)",
                },
                "&:hover":{
                    "&& fieldset":{
                        borderColor:"#3a80e9",
                    },
                },
            }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
        >
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={15}>15 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>2 Months</MenuItem>
          <MenuItem value={90}>3 Months</MenuItem>
          <MenuItem value={180}>6 Months</MenuItem>
          <MenuItem value={365}>1 Year</MenuItem>
        </Select>
     </div>
  );
}