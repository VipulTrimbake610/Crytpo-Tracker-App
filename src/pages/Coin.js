import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import ConvertObject from '../functions/ConvertObject';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrice } from '../functions/getCoinPrice';
import TogglePriceType from '../components/Coin/ChartType';

import LineChart from '../components/Coin/LineChart';
import SelectDays from '../components/Coin/SelectDays';
import { settingChartData } from '../functions/setingChartData';

const CoinPage = () => {
    let {id} = useParams();

    let [loadingStatus, setLoadingStatus] = useState(true);
    let [coinData, setCoinData] = useState([]);
    let [days, setDays] = useState(30);
    let [chartData, setChartData] = useState();
    const [priceType, setPriceType] = useState('prices');

    useEffect(()=>{
        if(id){
            getData();
      
        }
    },[id])

    async function getData(){
        const data = await getCoinData(id);
        if(data){
            ConvertObject(setCoinData,data);
            const prices = await getCoinPrice(id, days,priceType);
            // console.log(prices);
            if(prices.length>0){
                settingChartData(setChartData,prices);
            }
            setLoadingStatus(false)
        }
    }

    const handleDaysChange = async(event) => {
        
        setLoadingStatus(true);
        setDays(event.target.value);
        const prices = await getCoinPrice(id, event.target.value, priceType);
        if(prices.length>0){
            settingChartData(setChartData,prices);
        }
        setLoadingStatus(false)
      };


      const handlePriceType = async(event,newType) => {
        if(newType != priceType){
            setLoadingStatus(true);
            const prices = await getCoinPrice(id, days,newType);
            if(prices.length>0){
                settingChartData(setChartData,prices);
                setPriceType(newType);
            }
            setLoadingStatus(false)
        }
      };
  return (
    <>
    <Header />
    {
        loadingStatus?<Loader />:
        <>
        <table className='makeGray'>
            <List coin={coinData}/>
        </table>
        <br />
        <div className='makeGray myChart'>
        Price Change in the last :&nbsp;<SelectDays days={days} handleDaysChange={handleDaysChange}/>
            <TogglePriceType priceType={priceType} handlePriceType={handlePriceType}/>
            <LineChart chartData={chartData} priceType={priceType}/>
        </div>

        <br />
        <CoinInfo heading={coinData.name} desc={coinData.desc}/>
        </>
    }
    
    </>
  )
}

export default CoinPage