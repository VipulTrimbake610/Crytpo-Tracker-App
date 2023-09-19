import * as React from 'react';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './style.css'
    
    export default function PaginationComponent({page, handlePageChange}) {
         

        return (
            <div className='pagination-flex'>

      <Pagination 
      count={10} 
      page={page}
      onChange={(e,value)=>handlePageChange(e,value)}
      sx={{
                    color:'var(--white)',
                    '& .Mui-selected ':{
                        backgroundColor:"var(--blue) !important",
                        color:"#fff !important",
                        borderColor:"var(--blue) !important"
                    },
                    "& .MuiPaginationItem-ellipsis":{
                        border:"0px solid var(--grey) !important",
                    },
                    "& .MuiPaginationItem-text":{
                        color:"var(--white)",
                        border:"1px solid var(--grey)"
                    },
                }}
                
                />
                </div>
   
  );
}