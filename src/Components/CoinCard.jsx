import { Line } from "react-chartjs-2";
import "../Css/coinCard.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { LogoMessariBysymbol, HistoricalDataMessari} from "../config/api";
import { useState ,useRef, useEffect} from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
// {
//   id: 0,
//   name: "Arweave",
//   symbol: "AR",
//   aboutcoin:
//     "Arweave (AR) is a versatile enterprise-grade L1 smart contract platform.",
//   finalPrice: "0.39 usdt",
//   roi: "ROI in a year  ",
//   s1: 0.068,
//   s2: 0.14,
//   r1: 0.16,
//   r2: 0.18,
// }
function CoinGraph(props) {
  const [frame,setFrame] = useState('1Hr');
  const [value,setValue] = useState([]);
  const componentMounted = useRef(true);
  let timeFrame = ["1Hr", "1D", "1W"];
   var data = {
  labels: value.map((data)=>data[0]),
  datasets: [
    {
      data: value.map((data)=>data[1]),
      fill: false,
      lineTension: 0.35,
      borderCapStyle: "butt",
      borderJoinStyle: "miter",
      borderColor: "#F6416C",
      borderWidth: 1.5,
      pointBorderWidth: 0,
      pointHoverRadius: 3.5,
    },
  ],
};

  function TimeSeriesDataMessari(coinName,frame){
    let daysCalc = {
      "1Hr": [1,''],
      "1D": [30,'1d'],
      "1W":[210,'1w']
    } 
   let daysBack = new Date().getTime() - (24*60*60*1000)*daysCalc[frame][0];
    let interval=daysCalc[frame][1];
    let columns = 'timestamp,close';
     async function getData(){
       try{
      const res = await fetch(HistoricalDataMessari(coinName,daysBack,interval,columns));
      const data = await res.json();
      // setValue((value)=>value =
      //    data.data.values 
      //   );
        return data.data.values;
       }catch(error){
         console.log(error);
    }
     }
      //  getData()
      //  console.log(getData());
    //  return value.slice(0,30);
    return getData();
    }
  function handleClicked(e){
     let dataId = e.target.getAttribute('data-id');
     setFrame((frame)=>frame = dataId);
  }
  // function fetchGraphData(coinName, frame){
    //  setgraphData(graphData)

 console.log(value)
 useEffect( () => {
  componentMounted.current=true;
     if (componentMounted.current){ // is component still mounted?
      TimeSeriesDataMessari(props.coinName, frame)
      .then((data)=>{
        setValue((value)=>value= data.map((elem)=>{
          let fullDate = new Date(Number(elem[0]))
          let date = fullDate.toString().slice(4,10);
          let time = fullDate.toString().slice(16,21);
         let price =Number(elem[1].toFixed(2));
          return  [frame==='1Hr'?time:date,price]
        }));      
      }
      );//  write data to state 
     }
     return () => { // This code runs when component is unmounted
         componentMounted.current = false; //  set it to false when we leave the page
     }
 },[frame]);
  return (
    <div className="coin-graph">
      <div className="supp-res-box">
        <h2>{props.coinData.symbol}/USD</h2>
        <p>
          Heavy buying zone
          <br />
          (Support)
        </p>
        <span>S1 : {props.coinData.s1}</span>
        <span>S2 : {props.coinData.s2}</span>
        <p>
          Heavy buying zone <br />
          (Resistance)
        </p>
        <span>R1 : {props.coinData.r1}</span>
        <span>R2 : {props.coinData.r2}</span>
      </div>
      <div className="graph-box">
        <div className="time-frames">
          {timeFrame.map((elem, index) => (
            <span key={index} data-id={elem} className={frame===elem? 'active-dot':''} onClick={handleClicked}>
              {elem}
            </span>
          ))}
        </div>
        <Line data={data} options={props.options} />
      </div>
    </div>
  );
}

function CoinCard(props) {
  // let symbol = props.coin.symbol === "DOT" ? "polkadot" : props.coin.symbol;
  return (
    <div className="coin-card" style={props.style}>
      <div className="coin-details">
        <h1 className="coin-name">
          <img
            src={LogoMessariBysymbol(props.coinName)?.toLowerCase()}
            alt="coin logo"
            style={{ width: "48px" }}
          />
          {props.coin.name}
          <sup>{props.coin.symbol}</sup>
        </h1>
        <h3>What it holds</h3>
        <p>{props.coin.aboutcoin}</p>
        <h3>Final Price</h3>
        <p>{props.coin.finalPrice}</p>
        <h3>ROI in a year</h3>
        <p>{props.coin.roi}</p>
      </div>
      <CoinGraph
        data={props.graphData}
        options={props.graphOptions}
        coinData={props.coin}
        coinName={props.coinName}
      />
    </div>
  );
}

export default CoinCard;
