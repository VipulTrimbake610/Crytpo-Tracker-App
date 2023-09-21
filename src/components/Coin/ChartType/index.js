// import * as React from 'react';
import React from 'react';
import './style.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function TogglePriceType({priceType, handlePriceType}) {
 

  return (
    <div className='toggleGroup'>

    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceType}
      sx={{
        "& .Mui-selected":{
            color:"var(--blue) !important",
            backgroundColor:"rgba(163, 163, 219, 0.2) !important",

        },
        borderColor:"var(--blue)",
        "& .MuiToggleButtonGroup-grouped":{
            border:"1px solid var(--blue)!important",
            color:"var(--blue)",
        },
        "& .MuiToggleButton-standar":{
            color:"var(--blue)",
        },

      }}
      
      >
      <ToggleButton value="prices" className='toggle-btn'>Prices</ToggleButton>
      <ToggleButton value="market_caps" className='toggle-btn'>Market Cap</ToggleButton>
      <ToggleButton value="total_volumes" className='toggle-btn'>Total Volume</ToggleButton>
    </ToggleButtonGroup>
        </div>
  );
}