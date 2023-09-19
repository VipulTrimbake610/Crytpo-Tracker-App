import axios from "axios"

export const getCoinData = (id) =>{
   let myData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((data)=>{
        return data.data;
        // console.log("RESPONSE---> ",data.data)
        // setLoadingStatus(false);
        // ConvertObject(setCoinData,data.data)
        // console.log(coinData);
})
    .catch(err=>console.log(err))

    return myData;
}