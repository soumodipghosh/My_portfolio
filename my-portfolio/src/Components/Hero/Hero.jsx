import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/IMG_20231224_154608.jpg"

const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Soumodip Ghosh,</span> frontend developer based in INDIA.</h1>
      <p>I am a frontend developer from West Bengal, India with proven skills Html, Css and Javascript.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
