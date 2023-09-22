import axios from "axios";

export const getCoinPrice = (id, days, priceType) =>{
      const myData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
            .then((data)=>{
                return data.data[priceType];
            })
            .catch((err)=>err)
        return myData;
}