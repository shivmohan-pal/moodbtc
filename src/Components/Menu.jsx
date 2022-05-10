import { NavLink } from "react-router-dom";
import "../Css/Menu.css";
import github from "./github.svg"
function Menu({ close }) {
    function doClose(e) {
        close();
    }
    return (
        <div className="menu">
            <div className='menu-box'>
                <div className="nav">
                    <NavLink to="/books" onClick={doClose}><div className='fisSlide'></div>Books</NavLink>
                    <NavLink to="/live-coins" onClick={doClose}><div className='fisSlide'></div>Live Coins</NavLink>
                    <NavLink to="/ourpicks" onClick={doClose}><div className='fisSlide'></div>Our Picks</NavLink>
                    <NavLink to="/news" onClick={doClose}><div className='fisSlide'></div>News</NavLink>
                </div>
                <div>
                    <h1 className="sodt"><NavLink to='/signal-of-the-day' onClick={doClose}>Signal of the day</NavLink></h1>
                    <div className="social">
                        <h1 className="title">moodBTC</h1>
                        <p>Join our community</p>
                        <ul className="social-links">
                            <li><a onClick={doClose} href="github-repo-link" target='_blank' rel='noreferrer'><img src={github} alt='github svg' /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Menu;