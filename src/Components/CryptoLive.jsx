import { useState } from "react";
import { useEffect } from "react";
import { CoinListMessari, LogoMessari } from "../config/api";
import "../Css/cryptoLive.css";
import Loading from "./Loading";

function TableRow(props) {
  return (
    <div className="table-row">
      <div className="table-col">
        <img
          src={props.coin.image}
          alt={props.coin.name}
          style={{ width: "32px" }}
        />
        <div>
          <h3>{props.coin.symbol?.toUpperCase()}</h3>
          <br />
          <p>{props.coin.name}</p>
        </div>
      </div>
      <div className="table-col">
        <span style={{ color: props.coin.price_color }}>
          ${props.coin.current_price.toLocaleString("en-US")}
          {/* {Intl.NumberFormat( 'en-US', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(props.coin.current_price)} */}
        </span>
      </div>
      <div className="table-col">
        <span>
          ${/* {props.coin.market_cap.toLocaleString('en-US')} */}
          {Intl.NumberFormat("en-US", {
            maximumFractionDigits: 1,
            notation: "compact",
            compactDisplay: "short",
          }).format(props.coin.market_cap)}
        </span>
      </div>
    </div>
  );
}
function CryptoLive(porps) {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);
  const [foundCoins, setFoundCoins] = useState([]);
  // const [loading.setLoading] =useState(false);
  function typing(e) {
    let value = e.target.value;
    setSearch((search) => (search = value?.toLowerCase()));
  }
  function findCoins(search) {
    if (!search) {
      setFoundCoins((foundCoins) => (foundCoins = []));
    } else {
      setFoundCoins(
        (foundCoins) =>
          (foundCoins = coins.filter(
            (coin) =>
              coin.name?.toLowerCase().includes(search) ||
              coin.symbol?.toLowerCase().includes(search)
          ))
      );
    }
  }

  //------- Messari data fetch-------//
  async function getCoins() {
    try {
      const res = await fetch(CoinListMessari(500));
      const data = await res.json();
      setCoins((prevCoins) =>
        data.data.map((elem, index) => {
          return {
            id: elem.id,
            name: elem.slug,
            symbol: elem.symbol,
            image: LogoMessari(elem.id),
            current_price: elem.metrics.market_data.price_usd,
            market_cap: elem.metrics.marketcap.current_marketcap_usd,
            price_color:
              prevCoins[index]?.current_price <=
              elem.metrics.market_data.price_usd
                ? "var(--green)"
                : "var(--red)",
          };
        })
      );
      // console.log(data.data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    findCoins(search);
    const ac = new AbortController();
    var timeout = setInterval(() => {
      getCoins();
    }, 5000);
    return () => {
      clearTimeout(timeout);
      ac.abort();
    };
  }, [search]);

  return (
    <div className="cryptoLive">
      <h1 className="heading">Live Crypto Currency Price</h1>
      <input
        className="input"
        type="text"
        value={search}
        placeholder="Search for a crypto currency...."
        onChange={typing}
      />
      <div className="coins-table">
        <div className="table-head">
          <div className="table-col">
            <h3>Coin</h3>
          </div>
          <div className="table-col">
            <h3>Price</h3>
          </div>
          <div className="table-col">
            <h3>Market Cap</h3>
          </div>
        </div>
        <div className="table-body">
          {!coins.length && !foundCoins.length && (
            <div style={{ padding: "var(--xx-large)" }}>
              <Loading color="var(--red)" size="1.3rem" delay="0.5s" />
            </div>
          )}
          {!foundCoins.length &&
            coins.map((coin, index) => <TableRow key={index} coin={coin} />)}
          {foundCoins.length &&
            foundCoins.map((coin, index) => (
              <TableRow key={index} coin={coin} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CryptoLive;
