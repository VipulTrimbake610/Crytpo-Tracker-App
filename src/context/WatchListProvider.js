import React, { useState } from 'react'
import WatchListContext from './WatchListContext'

const WatchListProvider = ({children}) => {
    
  let [watchData, setWatchData] = useState([]);
  let [watchCoins, setWatchCoins] = useState([]);

  async function handleWatchlist(e,coinId){
    e.preventDefault();
    let flag = false;
    watchData.forEach((e)=>{
        if(e == coinId){
            flag = true;
            let ar = [...watchData];
            let index = ar.indexOf(coinId);
            ar.splice(index,1);
            
            console.log(ar);
            localStorage.setItem("watchData",JSON.stringify(ar));
            
            let myArr = [...watchCoins];
            let myArr1 = myArr.filter((event)=>{
                if(event.id == coinId){
                    return false;
                }else{
                  return true;
                }
            })
            setWatchCoins(myArr1);
            setWatchData(ar);
        }
    })
    if(flag == false){
      let ar = [...watchData];
      ar.push(coinId);
      console.log(ar);
      localStorage.setItem("watchData",JSON.stringify(ar));
      setWatchData(ar);
    }
  }
  return (
    <WatchListContext.Provider value={{watchData:watchData,setWatchData:setWatchData,handleWatchlist:handleWatchlist,watchCoins:watchCoins,setWatchCoins:setWatchCoins}}>
        {children}
    </WatchListContext.Provider>
  )
}

export default WatchListProvider;