import React, { useState } from 'react'
import './style.css';

const CoinInfo = ({heading,desc}) => {

    let [flag, setFlag] = useState(false);

    const shortDesc = desc.slice(0, 400) + "<p style='var(--grey)'> Read More...</p>";
    const longDesc = desc + "<p style='var(--grey)'> Read Less...</p>";
  return (
    <div className='coin-info'>
        <h2>{heading}</h2>
        {
            desc.length > 350 ?
            <p 
            onClick={()=>setFlag(!flag)}
            className='coin-info-desc' 
            dangerouslySetInnerHTML={{__html:(flag)?longDesc:shortDesc}}
            />
            :
            <p 
            className='coin-info-desc' 
            dangerouslySetInnerHTML={{__html:desc}}
            />
        }
    </div>
  )
}

export default CoinInfo