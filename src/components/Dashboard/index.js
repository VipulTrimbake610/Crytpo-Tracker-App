
import TabsComponent from './TabsComponent';

import React, { useEffect, useState } from 'react';
import Header from '../Common/Header';
import Search from './Search';
import PaginationComponent from './Pagination';
import Loader from '../Common/Loader';
import BackToTop from '../Common/BackToTop';
import { getHundredCoins } from '../../functions/getHundredCoins';
import { toast } from 'react-toastify';



const Dashboard = () => {
  
  let [search, setSearch] = useState("");
  let [coins, setCoins] = useState();
  let [paginatedCoins, setPaginatedCoins] = useState([]);
  let [loadingStatus, setLoadingStatus] = useState(true);

  let [page, setPage] = useState(1);

  useEffect(()=>{
    getData();
  },[])
  let count = 0;
  async function getData(){
    setLoadingStatus(true)
    const myCoins = await getHundredCoins();
    if(myCoins.length){
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0,10));
      setLoadingStatus(false);
    }else{
      if(count == 0){
        toast.error(myCoins.message);
        count  = 1;
      }
    }
    
  }
  const handlePageChange = (event, value) => {

    var previousPage = (value-1) * 10;
    setPaginatedCoins(coins.slice(previousPage,previousPage+10))
    setPage(value)

  }

  let filteredCoins = (coins) ? coins.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()) || e.id.toLowerCase().includes(search.toLowerCase()) || e.symbol.toLowerCase().includes(search.toLowerCase())) : coins;



  return (
    <>
      <Header />
      <BackToTop />
      {
        loadingStatus?<Loader/>:
        <>
      <Search setSearch={setSearch} />
      <TabsComponent coins={search?filteredCoins:paginatedCoins} />
       </>
      }
      {
        !search &&
        <PaginationComponent page={page} handlePageChange={handlePageChange} />
      }
    </>
  )
}

export default Dashboard;