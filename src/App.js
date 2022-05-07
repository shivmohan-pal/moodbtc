import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import Books from './Components/Books';
import Footer from './Components/Footer';
import Home from './Components/Home';
import LiveCoins from './Components/LiveCoins';
import Navbar from './Components/Navbar';
import News from './Components/News.jsx';
import OurPicks from './Components/OurPicks';
import Signal from './Components/Signal';
import './Css/App.css';

function App() {
  return (
     <HashRouter basename='/'>
      <div className="App">
        <Navbar />
        <div className='main'>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path='/books' element={<Books/>} />
            <Route exact path='/live-crypto' element={<LiveCoins/>}/>
            <Route exact path="/ourpicks" element={<OurPicks/>} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/signal-of-the-day" element={<Signal />} />
          </Routes>
        </div>
        <Footer />
      </div>
     </HashRouter>
  );
}

export default App;
