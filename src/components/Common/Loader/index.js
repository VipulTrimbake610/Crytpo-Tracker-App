import React from 'react'
import { CircularProgress } from '@mui/material'
import "./style.css";

const Loader = () => {
  return (
    <div className='myLoader'>
        <CircularProgress/>
    </div>
  )
}

export default Loader