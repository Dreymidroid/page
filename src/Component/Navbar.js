import "./Navbar.css";
import React from "react";
import "react-bootstrap";

class NavbarSect extends React.Component {
  render() {
    return (
      <div className="nav">
          <p className="logo">ppp</p>
          <div>
            <ul className="ul">
              <li className="li">
                <a href="#home">Home</a>
              </li>
              <li className="li">
                <a href="#services">Services</a>
              </li>
              <li className="li">
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
      </div>
    );
  }
}

export default NavbarSect;
