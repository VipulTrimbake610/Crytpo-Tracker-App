import './style.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const Grid = ({coin, handleWatchlist, watchStatus}) => {

  return (
    <NavLink to={`/coin/${coin.id}`}>
    <div className={`grid-container ${coin.price_change_percentage_24h>0?"active-green":"active-red"}`} >
      <div className='info-flex'>
        <img src={coin.image} alt="Image is Getting loaded..." />
        <div className='name'>
          <p className='name-symbol'>{coin.symbol}-USD</p>
          <p className='name-id'>{coin.id}</p>
        </div>
        {
          watchStatus &&
          <div className={`watchStar ${coin.price_change_percentage_24h>0?"":"watchRed"}`} onClick={(e)=>handleWatchlist(e,coin.id)} >
          <GradeRoundedIcon className={`watchCompo ${coin.price_change_percentage_24h>0?"":"watchCompoRed"}`}/> 
        </div>
        }
        {
          !watchStatus &&
          <div  className={`watchStar ${coin.price_change_percentage_24h>0?"":"watchRed"}`} onClick={(e)=>handleWatchlist(e,coin.id)} >
            <StarBorderRoundedIcon className={`watchCompo ${coin.price_change_percentage_24h>0?"":"watchCompoRed"}`}/> 
          </div>
        }
        
      </div>
      {
        coin.price_change_percentage_24h>0?
        
            <div className='chip-flex'>
          <div className='chip-num'>{coin.price_change_percentage_24h.toFixed(2)} %</div>
          <div className='chip-symb'>{<TrendingUpRoundedIcon/>}</div>
      </div>
        :
        <div className='chip-flex'>
        <div className='chip-num chip-red'>{coin.price_change_percentage_24h.toFixed(2)} %</div>
        <div className='chip-symb chip-red'>{<TrendingDownRoundedIcon/>}</div>
        </div>
      }
      <h3 style={{color:coin.price_change_percentage_24h>0?"var(--green)":"var(--red)"}}>${coin.current_price.toLocaleString()}</h3>
     <div className='extra-info'>
      <p>Total Volume : ${coin.total_volume.toLocaleString()}</p>
      <p>Market Cap : ${coin.market_cap.toLocaleString()}</p>
     </div>

    </div>
    </NavLink>
  )
}

export default Grid;