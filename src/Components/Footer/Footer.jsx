import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Yashlawaniya@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/duhh_itzz.yash/"><Insta color="white" size={"3rem"} className='glow-icon'/></a>
          <a href="https://www.linkedin.com/in/yashlawaniyadev/"><Linkedin color="white" size={"3rem"} className='glow-icon'/></a>
          <a href="https://github.com/Yashlawaniya"><Gitub color="white" size={"3rem"} className='glow-icon'/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer