import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/TabsComponent';
import { getHundredCoins } from '../functions/getHundredCoins';
import WatchListContext from '../context/WatchListContext';
import MyButton from '../components/Common/Button';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Common/Footer';

const WatchListPage = () => {
    useEffect(() => {
        getData();
    }, [])

    let [allCoins, setAllCoins] = useState([]);
    let { setWatchCoins, watchCoins } = useContext(WatchListContext);

    async function getData() {
        if (localStorage.getItem("watchData")) {

            let mydata = await getHundredCoins();
            console.log(mydata);
            setAllCoins([...mydata]);

            let local = JSON.parse(localStorage.getItem("watchData"));
            console.log("local : ", local);
            let filteredData = mydata.filter((e) => {
                for (let i = 0; i < local.length; i++) {
                    if (local[i] == e.id) {
                        return true;
                    }
                }
                return false;
            })
            setWatchCoins(filteredData);
        }
    }
    return (
        <>
            <Header />
            {
                watchCoins.length <= 0 &&
                <>
                    <h1 align="center" className='watchh1'>No Items in the WatchList!</h1>
                    <br /><br />
                    <center>

                        <NavLink to="/dashboard">
                            <MyButton text="Dashboard" onClick={() => console.log("Btn Clicked!")} outlined={false} />
                        </NavLink>

                    </center>
                </>

            }
            <>
                <div className='watchMain'>

                    {
                        watchCoins.length > 0 &&
                        <TabsComponent coins={watchCoins} />
                    }
                </div>
            </>
            <Footer />
        </>
    )
}

export default WatchListPage