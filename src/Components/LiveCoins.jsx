import { useEffect } from "react";
import CryptoLive from "./CryptoLive";

function LiveCoins(){
    useEffect(()=>{
        document.title=`moodBTC - Live Coins`;
      })
    return ( 
        <div className="content-window">
        <div className="content-window-child">
         <CryptoLive />
        </div>

        </div>
    );
}
export default LiveCoins;