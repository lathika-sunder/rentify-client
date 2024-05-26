import React from "react";
import logo from "../../assets/images/logo.png";
import "./Header.css";
import IsLoggedIn from "../LoginHelper/IsLoggedIn";
import { FaHome, FaPhone } from "react-icons/fa";
import IsNotLoggedIn from "../LoginHelper/IsNotLoggedIn";
import { Link } from "react-router-dom";
const Header = () => {
  const iconStyle = {
    fontSize: "3vh",
    color: "#1E1E1EC8",
  };
  return (
    <div className="header">
      <img className="logo-img" src={logo}></img>
      <div className="header-content">
        <ul>
          <li>
           <Link to="/"> <FaHome style={iconStyle} /></Link>
          </li>
          
          <IsLoggedIn>
            <Link to="/">
              <button className="btn-primary">Log Out</button>
            </Link>
          </IsLoggedIn>
          <IsNotLoggedIn>
            <Link to="/login">
              <button className="btn-primary">Login</button>
            </Link>
          </IsNotLoggedIn>
        </ul>
      </div>
    </div>
  );
};

export default Header;
