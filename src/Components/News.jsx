import { useState,useEffect } from 'react';
import { NewsListMessari } from '../config/api';
import '../Css/news.css'
// function NewsList (props){
//       return (
//           <div >

//           </div>
//       );    
// }
function News() {
   const [news,setNews] = useState([]);
   async function getNews(url,opts){
    try{
    const res = await fetch(url,opts);
    const data = await res.json();
    setNews((news) =>news=
     data.data.map((elem,index)=>{
        return {
                 id:elem.id,
                 heading:elem.title,
                 body:elem.content?.replace('Download the PDF version of this report by clicking here.pdf).\n'," "),
                 timeAgo:elem.published_at,
                 author:elem.author.name,
                 url:elem.url,
                 tags:elem.tags,
                 readmore:false
                  }
                })
                 );
    // console.log(data.data);
    return data;
    }catch(error){
         console.log(error);
    }
}
 function readmore(){

 }
//  function redirect(e){
//      e.bubbles=false;
//      console.log(e.target.getAttribute('data-id'));
//      let link = e.target.getAttribute('data-id');
//     history.push(link);
//  }
   useEffect(()=>{
        document.title=`moodBTC - News`;
          getNews(NewsListMessari());
   })
//    const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'crypto-open-news.p.rapidapi.co',
// 		'X-RapidAPI-Key': '668c2fc2400msh517fac3044ba830p1d2ab9jsnb55e2c6e01fc'
// 	}
// }
// console.log(getNews('https://crypto-open-news.p.rapidapi.com/news',options));
   
    return (
        <div className="content-window">
            <div className="content-window-child">
                <div className="news">
                    <h1 className='heading'>Latest News</h1>
                    <div className='news-block'>
                    {
                        news.map((value) => {
                         {/* let todayDate = new Date()   */}
                         {/* let newsDate = new Date(value.timeAgo).getTime(); */}
                         let time = new Date(value.timeAgo)
                         return (
                         <div key={value.id} className='newsItem'>
                          <a href={value.url} target='_blank' rel='noreferrer'>
                            <h3>{value.heading}</h3>
                            <samp style={{color:'var(--light-gray)'}}>Author - {value.author.replace(/_/gi,' ')}</samp>
                            <pre>
                            {value.body.substring(0,200)}
                            </pre>
                            <kbd>
                            {time.toString().slice(0,25)}
                            </kbd>
                            </a>
                        </div>
                         )
                    }
                    )}
                    </div>
                </div>
            </div>
        </div>

    );
}
export default News;