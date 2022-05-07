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
import { LogoMessariBysymbol, TimeSeriesDataMessari } from "../config/api";
import { useState } from "react";

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
  let timeFrame = ["1Hr", "1D", "1W"];
  var data = {
    labels: fetchGraphData('FTT',frame)[0],
    datasets: [
      {
        data: fetchGraphData('FTT',frame)[1],
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
  function handleClicked(e){
     let dataId = e.target.getAttribute('data-id');
     setFrame((frame)=>frame = dataId);
  }
  function fetchGraphData(coinName, frame) {
    //  setgraphData(graphData)
    let t= TimeSeriesDataMessari(coinName, frame);
    let time = t.map((elem)=>{
      let fullDate = new Date(Number(elem[0]))
      let date = fullDate.toString().slice(4,10);
      let time = fullDate.toString().slice(16,21);
      return  frame==='1Hr'?time:date
    });
    let price =t.map((elem)=>Number(elem[1].toFixed(2)));
    return [time,price]
  }
  // console.log(fetchGraphData('Arweave',frame));
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
  let symbol = props.coin.symbol === "DOT" ? "polkadot" : props.coin.symbol;
  return (
    <div className="coin-card" style={props.style}>
      <div className="coin-details">
        <h1 className="coin-name">
          <img
            src={LogoMessariBysymbol(symbol).toLowerCase()}
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
      />
    </div>
  );
}

export default CoinCard;
