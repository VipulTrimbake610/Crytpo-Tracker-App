import React, { useContext, useEffect, useState } from 'react';
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
import WatchListContext from '../context/WatchListContext';
import { toast } from 'react-toastify';

const ComparePage = () => {
    let [loadingStatus, setLoadingStatus] = useState(true);
    let [crypto1, setCrypto1] = useState("bitcoin");
    let [crypto2, setCrypto2] = useState("ethereum");

    let [cryptoData1, setCryptoData1] = useState();
    let [cryptoData2, setCryptoData2] = useState();

    let [days, setDays] = useState(30);
    let [chartData, setChartData] = useState();
    let [priceType, setPriceType] = useState('prices');

    let {watchData, handleWatchlist} = useContext(WatchListContext);

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        setLoadingStatus(true)
        const data1 = await getCoinData(crypto1);
        const data2 = await getCoinData(crypto2);
        
        if (!data1.message && !data2.message) {
            ConvertObject(setCryptoData1, data1);
            ConvertObject(setCryptoData2, data2);
            const prices1 = await getCoinPrice(crypto1, days, priceType);
            const prices2 = await getCoinPrice(crypto2, days, priceType);
            if (prices1.length > 0 && prices2.length > 0) {
                settingChartData(setChartData, prices1, prices2,{crypto1:crypto1,crypto2:crypto2})
                setLoadingStatus(false);
            }else{
                toast.error((prices1.message)?prices1.message:prices2.message);
            }
        }else{
            toast.error((data1.message)?data1.message:data2.message);
        }

    }

    async function handleDaysChange(event) {
        setLoadingStatus(true);
        setDays(event.target.value)
        const prices1 = await getCoinPrice(crypto1, event.target.value, priceType);
        const prices2 = await getCoinPrice(crypto2, event.target.value, priceType);
        if (prices1.length > 0 && prices2.length > 0) {
            settingChartData(setChartData, prices1, prices2,{crypto1:crypto1,crypto2:crypto2})
            setLoadingStatus(false);
        }else{
            toast.error(prices1.message?prices1.message:prices2.message);
        }
    }

    const handlePriceType = async(event,newType) => {
        if(newType){
            setLoadingStatus(true);
            setPriceType(newType);
            const prices1 = await getCoinPrice(crypto1, days, newType);
            const prices2 = await getCoinPrice(crypto2, days, newType);
            if (prices1.length > 0 && prices2.length > 0) {
                settingChartData(setChartData, prices1, prices2,{crypto1:crypto1,crypto2:crypto2})
                setLoadingStatus(false);
            }else{
                toast.error(prices1.message?prices1.message:prices2.message);
            }
            }else{
                toast.error("PriceType is Null");
            }
        };

    async function handleCoinChange(event, isCoin2) {
        setLoadingStatus(true);
        if (isCoin2) {
            setCrypto2(event.target.value);
            const data = await getCoinData(event.target.value);
            if(!data.message){
                ConvertObject(setCryptoData2, data);
                const prices1 = await getCoinPrice(crypto1, days, priceType);
                const prices2 = await getCoinPrice(event.target.value, days, priceType);
                if (prices1.length > 0 && prices2.length > 0) {
                    settingChartData(setChartData, prices1, prices2,{crypto1:crypto1,crypto2:event.target.value})
                    setLoadingStatus(false);
                }else{
                    toast.error(prices1.message?prices1.message:prices2.message);
                }
            }else{
                toast.error(data.message);
            }
        } else {
            setCrypto1(event.target.value);
            const data = await getCoinData(event.target.value);
            if(data.message){
                toast.error(data.message);
            }else{
                ConvertObject(setCryptoData1, data);
                const prices1 = await getCoinPrice(event.target.value, days, priceType);
                const prices2 = await getCoinPrice(crypto2, days, priceType);
                if (prices1.length > 0 && prices2.length > 0) {
                    settingChartData(setChartData, prices1, prices2,{crypto1:event.target.value,crypto2:crypto2})
                    setLoadingStatus(false);
                }else{
                    toast.error(prices1.message?prices1.message:prices2.message);
                }
            }
        }
    }

    function handleCoinListGrid(coinData){
        if(watchData.length>0){
           let mycoin =  watchData.find((e)=>e === coinData.id)
           if(mycoin){
                return true;
           }
           else{
            return false;
           }
        }else{
            return false;
        }
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
                            <table>
                                <List coin={cryptoData1} handleWatchlist={handleWatchlist} watchStatus={handleCoinListGrid(cryptoData1)}/>
                                <List coin={cryptoData2} handleWatchlist={handleWatchlist} watchStatus={handleCoinListGrid(cryptoData2)}/>
                            </table>
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