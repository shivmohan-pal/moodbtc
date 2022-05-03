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

function CoinGraph(props) {
  const [frame,setFrame] = useState('1Hr');
  let timeFrame = ["1Hr", "1D", "1W"];
  function handleClicked(e){
     let tFrame = e.target.getAttribute('data-id');
     setFrame((frame)=>frame = tFrame);
  }
  // function fetchGraphData(frame) {
  //   //  setgraphData(graphData)
  //   let t= TimeSeriesDataMessari(coinsArray[0], frame);
  //   return t.map((elem)=>elem[1]);
  // }
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
        <Line data={props.data} options={props.options} />
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
