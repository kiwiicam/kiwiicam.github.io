import React from 'react'
import '../css/Footer.css'
import '../css/Header.css';
import '../css/Global.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiArrowSortedUp } from "react-icons/ti";

function Footer() {
  return (
    <div className='footer'>
      <div className='icons'>
        <div className='middle-footer'>
          <FaGithub className='move' />
          <div className='up'>
            <TiArrowSortedUp />
          </div>
          <FaLinkedin id='link'className='move' />
        </div>
      </div>
      <div className='text'>
        <h3>2024 © Campbell Boulton</h3>
      </div>
    </div>
  )
}

export default Footer
