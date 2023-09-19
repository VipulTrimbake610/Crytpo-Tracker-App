import React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJs} from "chart.js/auto";
import { ConvertNumber } from '../../../functions/ConvertNumber';

const LineChart = ({chartData, priceType,multiAxis}) => {
  const options = {
    plugins:{
        legend:{
            display:multiAxis ? true : false,
        },
    },
    responsive:true,
    interaction:{
        mode:"index",
        intersect:false,
    },
    scales:{
      Crypto1:{
        type:"linear",
        display:true,
        position:"left",
        ticks:{
          callback:function(value, index, ticks){
            if(priceType == "prices"){
              return "$" + value.toLocaleString();
            }else{
              return "$" + ConvertNumber(value);
            }
          }
        }
      },
      Crypto2:{
        type:"linear",
        display:true,
        position:"right",
        ticks:{
          callback:function(value, index, ticks){
            if(priceType == "prices"){
              return "$" + value.toLocaleString();
            }else{
              return "$" + ConvertNumber(value);
            }
          }
        }
      }
    }
  };

  return <Line data={chartData} options={options}/>
}

export default LineChart