import { ConvertDate } from "./ConvertDate";

export const settingChartData = async(setChartData,prices1,prices2,crypto) =>{
    if(prices2){
        setChartData({
            labels:prices1.map((price)=>ConvertDate(price[0])),
            datasets:[
                {
                    label:crypto.crypto1,
                    data:prices1.map((price)=>price[1]),
                    borderColor: "#3a80e9",
                    borderWidth:2,
                    fill:true,
                    tension:0.30,
                    pointRadius:0,
                    yAxisID:"Crypto1",
                },
                {
                    label:crypto.crypto2,
                    data:prices2.map((price)=>price[1]),
                    borderColor: "#61c96f",
                    borderWidth:2,
                    fill:true,
                    tension:0.30,
                    pointRadius:0,
                    yAxisID:"Crypto2",
                }
            ],
        });
    }else{
        setChartData({
            labels:prices1.map((price)=>ConvertDate(price[0])),
            datasets:[
                {
                    data:prices1.map((price)=>price[1]),
                    borderColor: "#3a80e9",
                    borderWidth:2,
                    fill:true,
                    tension:0.30,
                    backgroundColor: "rgba(58, 128, 233,0.1)",
                    pointRadius:0,
                },
            ],
        });
    }
} 