import React from 'react'
import './PreLoader.css'
import loader from '../../assets/images/preloader.gif'
import CircularProgress from '@mui/joy/CircularProgress';


const PreLoader = () => {
  return (
    <div className='pre-loader'>
        <CircularProgress/></div>
  )
}

export default PreLoader