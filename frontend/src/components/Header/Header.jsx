import React from 'react'
import logo from '../../assets/images/logo.png'
import './Header.css'
import IsLoggedIn from '../LoginHelper/IsLoggedIn'
import { FaHome, FaPhone } from "react-icons/fa";
const Header = () => {

  const iconStyle={
    fontSize:'3vh',
    color:"#1E1E1EC8"
  }
  return (
    <div className='header'>
        <img className="logo-img"src={logo}></img>
        <div className="header-content">
          <ul>
            <li><FaHome style={iconStyle}/></li>
            <li><FaPhone style={iconStyle}/></li>
            <IsLoggedIn/>
          </ul>
        </div>
    </div>
  )
}

export default Header