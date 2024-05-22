import React from 'react'
import logo from '../../assets/images/logo.png'
import './Header.css'
const Header = () => {
  return (
    <div>
        <img className="logo-img"src={logo}></img>
    </div>
  )
}

export default Header