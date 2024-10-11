import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1cUArM0S1zw_coz0m7giPhGOzGJ-ZolZ7/view?usp=sharing', '_blank'); 
  };
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt=""/>
      <h1>Hey there! <span>I'm Smriti</span>, Developer and Designer</h1>
      <p>I'm based in India and I've keen interest in content writing, web developement and designing</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div  onClick={handleResumeClick} className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
