import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import SelectCoins from '../components/ComparePage/SelectCoins';
import SelectDays from '../components/Coin/SelectDays';
import Loader from '../components/Common/Loader';
import { getCoinPrice } from '../functions/getCoinPrice';
import { getCoinData } from '../functions/getCoinData';
import ConvertObject from '../functions/ConvertObject';
import List from '../components/Dashboard/List';
import '../index.css';
import CoinInfo from '../components/Coin/CoinInfo';
import LineChart from '../components/Coin/LineChart';
import { settingChartData } from '../functions/setingChartData';
import TogglePriceType from '../components/Coin/ChartType';
import Footer from '../components/Common/Footer';

const ComparePage = () => {
    let [loadingStatus, setLoadingStatus] = useState(true);
    let [crypto1, setCrypto1] = useState("bitcoin");
    let [crypto2, setCrypto2] = useState("ethereum");

    let [cryptoData1, setCryptoData1] = useState();
    let [cryptoData2, setCryptoData2] = useState();

    let [days, setDays] = useState(30);
    let [chartData, setChartData] = useState();
    let [priceType, setPriceType] = useState('prices');

    

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        setLoadingStatus(true)
        const data1 = await getCoinData(crypto1);
        const data2 = await getCoinData(crypto2);
        if (data1) {
            ConvertObject(setCryptoData1, data1);
        }
        if (data2) {
            ConvertObject(setCryptoData2, data2);
        }
        if (data1 && data2) {
            const prices1 = await getCoinPrice(crypto1, days, priceType);
            const prices2 = await getCoinPrice(crypto2, days, priceType);
            if (prices1.length > 0 && prices2.length > 0) {
                settingChartData(setChartData, prices1, prices2,{crypto1:crypto1,crypto2:crypto2})
            }
        }

        setLoadingStatus(false);
    }

    async function handleDaysChange(event) {
        setLoadingStatus(true);
        setDays(event.target.value)
        const prices1 = await getCoinPrice(crypto1, event.target.value, priceType);
        const prices2 = await getCoinPrice(crypto2, event.target.value, priceType);
        settingChartData(setChartData, prices1, prices2,{crypto1:crypto1,crypto2:crypto2})
        setLoadingStatus(false)
    }

    const handlePriceType = async(event,newType) => {
        if(newType){
            setLoadingStatus(true);
            setPriceType(newType);
            const prices1 = await getCoinPrice(crypto1, days, newType);
            const prices2 = await getCoinPrice(crypto2, days, newType);
            settingChartData(setChartData, prices1, prices2,{crypto1:crypto1,crypto2:crypto2})
            setLoadingStatus(false)
            }
        };

    async function handleCoinChange(event, isCoin2) {
        setLoadingStatus(true);
        if (isCoin2) {
            setCrypto2(event.target.value);
            const data = await getCoinData(event.target.value);
            ConvertObject(setCryptoData2, data);
            const prices1 = await getCoinPrice(crypto1, days, priceType);
            const prices2 = await getCoinPrice(event.target.value, days, priceType);
            settingChartData(setChartData, prices1, prices2,{crypto1:crypto1,crypto2:event.target.value})
        } else {
            setCrypto1(event.target.value);
            const data = await getCoinData(event.target.value);
            ConvertObject(setCryptoData1, data);
            const prices1 = await getCoinPrice(event.target.value, days, priceType);
            const prices2 = await getCoinPrice(crypto2, days, priceType);
            settingChartData(setChartData, prices1, prices2,{crypto1:event.target.value,crypto2:crypto2})
        }
        setLoadingStatus(false)

        
    }
    return (
        <>
            <Header />
            {
                loadingStatus ? <Loader /> :
                    <>
                        <div className='compare-input-flex'>
                            <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCoinChange={handleCoinChange} />
                            <SelectDays days={days} handleDaysChange={handleDaysChange} />
                        </div>
                        {
                            cryptoData1 && cryptoData2 &&
                            <>
                            <div className='makeGray compare'>
                                <List coin={cryptoData1}/>
                            </div>
                            <br />
                            <div className='makeGray compare'>

                                <List coin={cryptoData2}/>
                            </div>
                            <br />
                            <div className='makeGray lineChart'>
                            <TogglePriceType priceType={priceType} handlePriceType={handlePriceType}/>
                            <LineChart chartData={chartData} priceType={priceType} multiAxis={true}/>
                            </div>
                            <br />
                            <div className='makeGray'>
                            <CoinInfo heading={cryptoData1.name} desc={cryptoData1.desc}/>
                            </div>
                            <br />
                            <div className='makeGray'>
                            <CoinInfo heading={cryptoData2.name} desc={cryptoData2.desc}/>
                            </div>
                            <br />

                            </>  
                        }
                    <Footer />
                    </>
            }

        </>
    )
}

export default ComparePage