import axios from "axios";

export const getHundredCoins = () =>{
    const myData = axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    .then(data=>{
        return data.data;
    })
    .catch(err=>err)

    return myData;
} 