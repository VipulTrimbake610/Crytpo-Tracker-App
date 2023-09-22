import React, { useEffect, useState } from 'react'
import { getHundredCoins } from '../../../functions/getHundredCoins';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './style.css';
import { toast } from 'react-toastify';

const SelectCoins = ({crypto1, crypto2, handleCoinChange}) => {
    let [allCoins, setAllCoins] = useState([]);
    const styles = {
        height: "2.5rem",
        color: "var(--white)",
        marginBottom: "2rem",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
            color: "var(--white)",
        },
        "&:hover": {
            "&& fieldset": {
                borderColor: "#3a80e9",
            },
        },
    }

    useEffect(()=>{ 
        getData();
    },[])
    async function getData(){
        const myCoins = await getHundredCoins();
        if(myCoins.length){

            setAllCoins(myCoins);
        }else{
            toast.error(myCoins.message);
        }
    }

   
    return (
        <div className='compare-flex'>
            <div className='sec'>
                    <p>Crypto 1</p>
                <Select
                    sx={styles}
                    value={crypto1}
                    label="Coin 1"
                    onChange={(event)=>handleCoinChange(event,false)}
                    >
                { allCoins &&
                        allCoins.filter((item=>item.id!=crypto2)).map((coin)=>(
                            <MenuItem key={coin.id} value={coin.id}>{coin.name}</MenuItem>
                            ))           
                        } 
                    
                </Select>
            </div>
            <div className='sec'>
                    <p>Crypto 2</p>
                <Select
                    sx={styles}
                    value={crypto2}
                    label="Coin 2"
                    onChange={(event)=>handleCoinChange(event,true)}
                    >
                { allCoins &&
                        allCoins.filter((item=>item.id!=crypto1)).map((coin)=>(
                            <MenuItem key={coin.id} value={coin.id}>{coin.name}</MenuItem>
                            ))           
                        } 
                    
                </Select>
            </div>
        </div>
    )

    }
export default SelectCoins;