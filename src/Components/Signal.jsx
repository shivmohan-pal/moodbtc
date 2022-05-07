import { useEffect } from 'react';
import { LogoMessariBysymbol } from '../config/api';
import '../Css/signal.css'

function Signal(){
    var sellP=15,buyP=85,keyNo=5801;
    useEffect(()=>{
        document.title=`moodBTC - Signal-Of-The-Day`;
      })
    return ( 
        <div className="content-window">
        <div className="content-window-child">
         <div className="signal">
             <div className='signal-block'>
                <img src={LogoMessariBysymbol('btc').toLowerCase()} alt='coin logo'/>
                <p>Total Number of engagement  on Social Networks <span style={{color:"var(--red)"}}>{keyNo}</span> Times</p>
                 <div className='sell press'><div className='fisSlide' style={{background:"var(--red)",width:`${sellP}%`/*,transform: `translateX(-${buyP}%)`*/}}></div>{sellP}%</div>
                 <div className='buy press'><div className='fisSlide' style={{background:"var(--green)",width:`${buyP}%`/*,transform: `translateX(-${sellP}%)`*/}}></div>{buyP}%</div>
             </div>
         </div>
        </div>
        </div>
    );
}
export default Signal;