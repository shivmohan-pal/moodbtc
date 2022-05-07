import "../Css/home.css"
function Home() {
    return (
        <div className="home content-window">
            <div className="content-window-child">
                <div className="howSignal">
                    <img src="./images/icons8-bitcoin-100.png" alt='logo' />
                    <div>
                        <h3>How to Use Our signals</h3>
                        <p>
                            The Crypto Market has been a Volatile market but what we see is the recent volatility in Stock market we tend to think the other way .
                        </p>
                        <p>
                            Every market where people bet on the idea of an entity or a product or a token people tend to follow the News and the surrounding hype around the Product
                        </p>
                        <p>
                            We at <em style={{ fontFamily: 'Arizonia' }}>&nbsp;moodBTC&nbsp;&nbsp;&nbsp;</em>we use different Social Volume on Different social sites ,Youtube and news to provide the best single coin to invest your money.
                        </p>
                        <p>
                            The only question is – Are you ready?
                        </p>
                    </div>
                </div>
            </div>
            <div className="content-window-child">
                <div className="features">
                    <h1 className="heading">Features</h1>
                    <ul>
                        <li>
                           <i>
                            <img src="./images/icons8-books-50.png" alt='books' />
                            </i>
                            <div>
                                <h2>20-30 Books</h2>
                                <p>
                                Books on different Topic such as PSHYCOLOGY, FINANCE, TRADING etc
                                </p>
                            </div>
                        </li>
                        <li>
                           <i>
                            <img src="./images/icons8-token-50.png" alt='token' />
                            </i>
                            <div>
                                <h2>6 Trending Token</h2>
                                <p>
                                We have 6 trending token list which we update very often
                                </p>
                            </div>
                        </li>
                        <li>
                           <i>
                            <img src="./images/icons8-news-50.png" alt='news' />
                            </i>
                            <div>
                                <h2>Collective News</h2>
                                <p>
                                The major News around the market from different news portal
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content-window-child">
                <div className="faq">
                 <h1 className="heading">FAQ</h1>
                 <p>You ask we tell</p>
                 <ul>
                  <li>What is the best trading platform ?</li>
                  <li>Suggestions for begginer  ?</li>
                  <li>What about volumes ?</li>
                  <li>How much money needed to trade ?</li>
                 </ul>
                </div>
            </div>
            <div className="content-window-child" style={{ background: 'var(--white)' }}>
                <div className="testimony">
                <div>
                 <h1 className="heading">Approvals From Our Friends</h1>
                 <p>Twice and thrice over , as they say , good is it to repeat and review what is good .</p>
                 </div>
                </div>
            </div>
            <div className="content-window-child" style={{ background: 'var(--red)' }}>
                <div className="join">
                 <h1 className="heading">Join Our <strong>DISCORD</strong></h1>
                 <p>Join the network where like minded people come and have a discussion </p>
                 <div className="welcome-button">
                     <span className="w">Welcome</span>
                     <span className="l">Let’s go &#x2192;</span>
                 </div>
                </div>
            </div>
        </div>
    )
}
export default Home;