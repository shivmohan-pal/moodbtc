import "../Css/footer.css"
import twitter from './twitter.svg'
import instagram from "./instagram.svg"
function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="foot-bar">
        <div>&copy; {year} MoodBTC</div>
        <div>
          <a href="twitter-hanle"><img src={twitter} alt='twitter svg' /></a>
          <a href="twitter-hanle"><img src={instagram} alt='instagram svg' /></a>
        </div>
      </div>
    </div>
  );
}
export default Footer;