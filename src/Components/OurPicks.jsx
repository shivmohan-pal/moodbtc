import { useState,useEffect } from "react";
import "../Css/ourPicks.css";
import CoinCard from "./CoinCard";
let coindata = [
  {
    id: 0,
    name: "Arweave",
    symbol: "AR",
    aboutcoin:
      "Arweave (AR) is a versatile enterprise-grade L1 smart contract platform.",
    finalPrice: "0.39 usdt",
    roi: "ROI in a year  ",
    s1: 0.068,
    s2: 0.14,
    r1: 0.16,
    r2: 0.18,
  },
  {
    id: 1,
    name: "Polkadot",
    symbol: "DOT",
    aboutcoin:
      "Polkadot (DOT) is a versatile enterprise-grade L1 smart contract platform.",
    finalPrice: "0.39 usdt",
    roi: "ROI in a year  ",
    s1: 0.068,
    s2: 0.14,
    r1: 0.16,
    r2: 0.18,
  },
  {
    id: 2,
    name: "Tether",
    symbol: "USDT",
    aboutcoin:
      "Tether (USDT) is a versatile enterprise-grade L1 smart contract platform.",
    finalPrice: "0.39 usdt",
    roi: "ROI in a year  ",
    s1: 0.068,
    s2: 0.14,
    r1: 0.16,
    r2: 0.18,
  },
  {
    id: 3,
    name: "Polygen",
    symbol: "MATIC",
    aboutcoin:
      "Polygen (MATIC) is a versatile enterprise-grade L1 smart contract platform.",
    finalPrice: "0.39 usdt",
    roi: "ROI in a year  ",
    s1: 0.068,
    s2: 0.14,
    r1: 0.16,
    r2: 0.18,
  },
  {
    id: 4,
    name: "FTX Token",
    symbol: "FTT",
    aboutcoin:
      "FTX Token (FTT) is a versatile enterprise-grade L1 smart contract platform.",
    finalPrice: "0.39 usdt",
    roi: "ROI in a year  ",
    s1: 0.068,
    s2: 0.14,
    r1: 0.16,
    r2: 0.18,
  },
  {
    id: 5,
    name: "Cosmos",
    symbol: "ATOM",
    aboutcoin:
      "Cosmos (ATOM) is a versatile enterprise-grade L1 smart contract platform.",
    finalPrice: "0.39 usdt",
    roi: "ROI in a year  ",
    s1: 0.068,
    s2: 0.14,
    r1: 0.16,
    r2: 0.18,
  },
  {
    id: 6,
    name: "Theta Network",
    symbol: "THETA",
    aboutcoin:
      "VeChain (THETA) is a versatile enterprise-grade L1 smart contract platform.",
    finalPrice: "0.39 usdt",
    roi: "ROI in a year  ",
    s1: 0.068,
    s2: 0.14,
    r1: 0.16,
    r2: 0.18,
  },
];
const options = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 1.4,
  scales: {
    x: {
      id: "x",
      grid: {
        display: false,
      },
    },
    y: {
      id: "y",
      // min:0.04,
      // max:0.36,
      grid: {
        display: true,
        color: "white",
        borderDash: [5, 3],
      },
      // ticks:{
      //   stepSize:0.02
      // }
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
function OurPicks() {
  var coinsArray = ["Arweave","Polkadot","Tether","Matic","FTT","Cosmos","Theta"];
  const [dot, setDot] = useState(0);
  const [graphData, setgraphData] = useState([]);
  function handleClick(e) {
    let dataId = e.target.getAttribute("data-id");
    setDot((dot) => (dot = Number(dataId)));
  }
  useEffect(()=>{
    document.title=`moodBTC - Our Picks`;
  })
  return (
    <div className="content-window">
      <div
        className="content-window-child"
        style={{ background: " var(--light-gray) " }}
      >
        <div className="ourPicks">
          <h1 className="heading">Coins That We Invest</h1>
          <div className="slider">
            <div className="slide">
              {coindata.map((element, index) => {
                return (
                  <CoinCard
                    style={{ transform: `translateX(${-(dot * 103.3)}%)` }}
                    key={index}
                    coin={element}
                    graphOptions={options}
                  />
                );
              })}
            </div>
            <ul className="dots">
              {coindata.map((element, index) => {
                return (
                  <li
                    key={index}
                    onClick={handleClick}
                    data-id={index}
                    className={index === dot ? "active-dot" : ""}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPicks;
