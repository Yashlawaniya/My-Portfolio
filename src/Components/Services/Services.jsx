import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import resume from './resume.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';

const Services = () => {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
        <span style={{color: darkMode? "white" : ""}}>My Awesome</span>
        <span>services</span>
        <span>I’m a passionate developer learning to build websites and web apps with modern tools
            <br /> like React, Node.js, and etc. <br /> I'm focused on improving every day and excited to work on real-world <br />projects that solve real problems.</span>
        <a href={resume} download>
           <button className="button s-button">Download CV</button>
              
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        {/* right side */}
        <div className="cards">
          <motion.div 
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}>
            <Card
            emoji = {HeartEmoji}
            heading = {'Design'}
            detail = {"Canva, Sketch, Photoshop, Adobe, Adobe xd"}
            />
          </motion.div>
          {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
            <Card
            emoji = {Glasses}
            heading = {'Developer'}
            detail = {"Html, Css, JavaScript, React, Node.js, Mongodb, Express"}
            />
          </motion.div>
          {/* 3rd  card */}
          <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
            <Card
            emoji = {Humble}
            heading = {'Version Control'}
            detail = {"Using Git and GitHub to manage my code, collaborate on projects, and track my learning journey."}
            />
          </motion.div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
        </div>
    </div>
  )
}

export default Services