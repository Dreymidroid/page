import "./MainPage.css";
import React from "react";

class MainPage extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="first" id="home">
          <div className="left">
            <div className="head" >
              <h2>
                Explore <b>CRYPTO</b> and <b>GIFTCARDS</b>
              </h2>
              <p>
                Exchange with Prince Private bitcoin today to experience amazing
                rates and seamless transactions.
              </p>
              <a href="#contact">
                <button className="button">
                  <b>Contact Us</b>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="second">
          <p><b>We are partnered with</b></p>
          <div className="partners">
            <div className="paypal"></div>
            <div className="applePay"></div>
            <div className="zelle"></div>
            <div className="cashapp"></div>
          </div>
        </div>

        <div className="third" id="services">
          <div className="thirdrow">
            <div className="box1">
              <h4>Prepaid bank spending</h4>
              <ul className="thirdList">
                <li className="thirdList">Greendot</li>
                <li className="thirdList">Chime</li>
                <li className="thirdList">Robinhood</li>
                <li className="thirdList">Dave</li>
                <li className="thirdList">Aspiration</li>
                <li className="thirdList">Walmart Money Card</li>
                <li className="thirdList">Netspend</li>
                <li className="thirdList">Woodforest</li>
                <li className="thirdList">Gobank</li>
              </ul>
            </div>

            <div className="box1">
              <h4>Mail</h4>
              <ul>
                <li className="thirdList">Greendot Mail</li>
                <li className="thirdList">Chime Mail</li>
                <li className="thirdList">GO2BANK</li>
                <li className="thirdList">Go Bank</li>
                <li className="thirdList">Bluebird</li>
                <li className="thirdList">Walmart Money Card</li>
              </ul>
            </div>

            <div className="box1">
              <h4>Local bank spending</h4>
              <ul>
                <li className="thirdList">Zelle</li>
                <li className="thirdList">Cashapp</li>
                <li className="thirdList">Paypal</li>
                <li className="thirdList">Venmo</li>
              </ul>
            </div>
          </div>

          <div className="thirdrow">
            <div className="box1">
              <h4>EDD</h4>
              <ul>
                <li className="thirdList">Funds Trandfer</li>
                <li className="thirdList">EDD Spending</li>
              </ul>
            </div>

            <div className="box1">
              <h4>Locked Prepaid Funds</h4>
              <ul>
                <li className="thirdList">Locked Greendot</li>
                <li className="thirdList">Locked Walmart</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="fourth">
          <p>Hear what others say about us</p>
          <div className="thirdrow">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <div className="thirdrow">
            <div className="five"></div>
            <div className="four"></div>
            <div className="six"></div>
          </div>
          
        </div>

        <div className="fifth" id="contact">
          <div className="contact">
            <h5 id="contact">Contact Us</h5>
            <p>15, Doherty Mall road, Lekki phase 1, Lagos.</p>
            
            <div className="mediaLinks">
              <a href="https://instagram.com/prince_privateexchange">
                <button className="insta"></button>
              </a>
              {/* <p>
              <a href="tel:+22954707662">(+229) 54707662</a>
            </p> */}
              <button className="fb"></button>
               <button className="twitter"></button> 
            </div>
          </div>
          <p>
            <b>
              2022 PPP All rights reserved <br></br>
              Designed and Developed by Special Technology A Giant
            </b>
          </p>
        </div>
      </div>
    );
  }
}

export default MainPage;
