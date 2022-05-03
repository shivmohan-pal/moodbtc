import { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css"
import Menu from "./Menu";
function Navbar() {
  const [menu, setMenu] = useState(false);
  function menuOnOff() {
    setMenu(menu => menu ? false : true)
  }
  return (
    <div className="navbar" style={{ background: menu ? 'var(--black)' : '' }}>
      <div className="bar">
        <h1 onClick={() => {
          //  history.push("/");
        }}>
        <Link to='/' className="title" style={{ color: menu ? "#C07B7B" : ""}}>moodBTC</Link></h1>
        <i className="material-icons close" onClick={menuOnOff} >{menu ? "close" : "menu"}</i>
      </div>
      {menu && <Menu close={menuOnOff}/>}
      {/* <div style={{ display: menu ? '' : 'none' }}>
        <Menu close={menuOnOff} />
      </div> */}
    </div>
  );
}
export default Navbar;