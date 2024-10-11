import React from 'react'
import './Footer.css'
import behance_icon from '../../assets/behance_icon.svg'
import linkedin_icon from '../../assets/linkedin_icon.svg'
import dribbble_icon from '../../assets/dribbble_icon.svg'
import twitter_icon from '../../assets/twitter_icon.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
      <a href="https://www.behance.net/smriti1225" target="_blank" rel="noopener noreferrer">
        <img src={behance_icon} alt=""/>
      </a>
      <a href="https://www.linkedin.com/in/smriti-d/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin_icon} alt=""/>
      </a>
      <a href="https://dribbble.com/Smriti1225" target="_blank" rel="noopener noreferrer">
        <img src={dribbble_icon} alt=""/>
      </a>
      <a href="https://x.com/smriti_25_" target="_blank" rel="noopener noreferrer">
        <img src={twitter_icon} alt=""/>
      </a>
      </div>
      <hr></hr>
      <div className="footer-bottom">
        <p>Made with ❤️ by Smriti</p>
      </div>
    </div>
  )
}

export default Footer
