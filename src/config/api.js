import { useState } from "react";

export const HistoricalChartGecko = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoinsGecko = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

export const CoinListMessari= (limit)=>
        `https://data.messari.io/api/v2/assets?limit=${limit}&fields=id,slug,symbol,metrics`;

export const NewsListMessari = () =>
  `https://data.messari.io/api/v1/news`;

export const Logo = (symbol,size)=>
`https://cryptoicons.org/api/icon/${symbol}/${size}/`;        

export const LogoMessari = (messariCoinId) =>
   `https://messari.io/asset-images/${messariCoinId}/128.png?v=2`;

export const LogoMessariBysymbol = (symbol)=>{
  const [id , setId] = useState("");
  async function getcoinData() {
    try{
    const res = await fetch(`https://data.messari.io/api/v1/assets/${symbol}`);
    const data = await res.json();
    setId((id)=>id=data.data.id);
    // return id;
    }catch(error){
         console.log(error);
    }
}
 getcoinData();
 return  LogoMessari(id);
}   

export const HistoricalDataMessari = ( coinName, after ,interval,columns)=>
/* parameters :
 start=yyyy-mm-dd , end=yyyy-mm-dd , interval= "1h" || "1d" || "1w" ,
 columns=timestamp,open,high,low,close,volume       comma seperated
*/
//  `https://data.messari.io/api/v1/assets/${coinName}/metrics/price/time-series?start=${start}&end=${end}&interval=${interval}&columns=${columns}`
 `https://data.messari.io/api/v1/assets/${coinName}/metrics/price/time-series?after=${after}&interval=${interval}&columns=${columns}`;

 export const TimeSeriesDataMessari = (coinName,frame)=>{
 const [value,setValue] = useState([]);
//  let today = new Date().getTime();
 let daysCalc = {
   "1Hr": [1,''],
   "1D": [30,'1d'],
   "1W":[210,'1w']
 } 
let daysBack = new Date().getTime() - (24*60*60*1000)*daysCalc[frame][0];

//  let startDate = `${daysBack.getFullYear()}-${daysBack.getMonth()+1}-${daysBack.getDate()}`;
//  let endDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
 let interval=daysCalc[frame][1];
 let columns = 'timestamp,close';
  async function getData(){
    try{
   const res = await fetch(HistoricalDataMessari(coinName,daysBack,interval,columns));
   const data = await res.json();
   setValue((value)=>value =
      data.data.values 
     );
    }catch(error){
      console.log(error);
 }
  }
  getData();

  return value.slice(0,30);

 }