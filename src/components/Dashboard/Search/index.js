import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './style.css';

const Search = ({setSearch}) => {
  return ( 
    <div className='search-flex'>
            <SearchRoundedIcon/>
            <input type="search" onChange={(e)=>setSearch(e.target.value)} placeholder='Search by Coin Name, Symbol and Id '/>
    </div>
  )
}

export default Search