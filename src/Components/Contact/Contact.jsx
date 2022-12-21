import { FacebookOutlined, GitHub, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'
import './contact.scss'
function Contact() {
  return (
    <div className="contact">
        <span>GET IN TOUCH</span>
        <div className="mail">
            <input type="text " placeholder='Enter your Email' />
            <button>JOIN US</button>
        </div>
        <div className="icons">
            <FacebookOutlined/>
            <Instagram/>
            <Twitter/>
            <GitHub/>
        </div>
    </div>
  )
}

export default Contact