import React from 'react';
import './style.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';



const BackToTop = () => {
  
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    if(mybutton){
      mybutton.style.display = "flex";
    }
  } else {
    if(mybutton){

      mybutton.style.display = "none";
    }
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  return (
    <div className='backToTop' id='myBtn' onClick={()=>topFunction()}>
        <ArrowUpwardIcon/>
    </div>
  )
}

export default BackToTop