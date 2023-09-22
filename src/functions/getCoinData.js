import axios from "axios"

export const getCoinData = (id) =>{
   let myData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((data)=>{
        return data.data;
})
    .catch(err=>err)

    return myData;
}