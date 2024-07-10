import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/IMG_20231224_154608.jpg"
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left" >
            <img src={profile_img} alt=""/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an Frontend Developer with professional expertise in the field.</p>
                <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication i bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivement">
            <h1>7+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
