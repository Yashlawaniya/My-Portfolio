import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Intagram from '../../img/instagram.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import yash from '../../img/yash.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-scroll';



const Intro = () => {

    const transition = {duration : 2, type: 'spring'}

    const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;
  return (
    <div className="intro" id='top'>
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? "white" : ""}}>Hy! I Am </span>
                <span>YASH LAWANIYA</span>
                <span>Frontend Developer with rich experience of web designing and development, producting the Quality work</span>
            </div>

            <Link to="contact" smooth={true} duration={500}>
  <button className="button i-button">Hire me</button>
</Link>

            <div className="i-icons">
                <a href="https://github.com/Yashlawaniya"><img src={Github} alt="" /></a>
                <a href="https://www.instagram.com/duhh_itzz.yash/"><img src={Intagram} alt="" /></a>
                <a href="https://www.linkedin.com/in/yashlawaniyadev/"><img src={LinkedIn} alt="" /></a>
                
            </div>

        </div>
        <div className="i-right">

            <img src={vector1} alt="" />
            <img src={vector2} alt="" />
            <img src={yash} alt="" />
            <motion.img 
            initial={{left: '-36%'}}
            whileInView= {{left: '-24%'}}
            transition= {transition} src={glassesimoji} alt="" />
            <motion.div 
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
            >
                <FloatingDiv image={Crown} txt1='Web' txt2= 'Developer'/>
            </motion.div>

            
            <motion.div 
            initial={{ left: "9rem", top: "18rem" }}
            whileInView={{ left: "0rem" }}
            transition={transition}
            className="floating-div"
            >
                <FloatingDiv image={thumbup} txt1='Best Design' txt2= 'Award'/>
            </motion.div>

{/* Blur divs */}
            <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
            <div className="blur" 
            style={{
                background: "#C1F5FF",
                top: '17rem',
                width: '21rem',
                height: '11rem',
                left: '-9rem'
            }}></div>
        </div>
    </div>
  )
}

export default Intro;