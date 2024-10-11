import React from 'react'
import './About.css'
import smriti_img from '../../assets/smriti_img.svg'


const About = () => {
  return (
    <div id="about" className='about'>
      <div className='about-title'>
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={smriti_img} alt=""/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Hey there! I’m Smriti, a UI/UX designer by passion, a full stack developer by logic, and a content writer by heart.</p>
                <p>Currently I'm a final year student at Dr. A.P.J. Abdul Kalam Technical University, I’m always exploring new ways to solve real-world problems. Whether it’s building engaging websites, developing full-fledged web apps, or writing stories that connect, I love combining creativity with functionality.</p>
                <p>Let’s code, design, and create something awesome together! 🎨💻</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
