import React, { useContext } from "react";
import "./Works.css";
// import Upwork from "../../img/Upwork.png";
import react from "../../img/react.png";
// import Fiverr from "../../img/fiverr.png";
import Node from "../../img/node.png";
// import Amazon from "../../img/amazon.png";
import Main from "../../img/main.png";
// import Shopify from "../../img/Shopify.png";
import Mongo from "../../img/mongodb.png";

// import Facebook from "../../img/Facebook.png";
import Js from "../../img/js.png";
import { FaStar } from "react-icons/fa";

import { themeContext } from "../../Context";
import { color, motion, transform } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>Here are </span>
          <span>Some of My Project Works</span>
          <div className="project-line">
            <FaStar className="icon" />
            <span>  Voice Assistant - JARVIS</span>
            <br />
            <br />
            <FaStar className="icon" />
            <span>  Responsive Wheather Web App</span>
            <br />
            <br />
            <FaStar className="icon" />
            <span>  Eco-Tracker</span>
            <br />
            <br />
            <FaStar className="icon" />
            <span>  Text-To-Voice Converter</span>
            <br />
            <br />
            <FaStar className="icon" />
            <span>  AI-Chatbot</span>
          </div>
          <p>#Available on GitHub</p>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 10, // slower and smoother, adjust as needed
            ease: "linear",
          }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={react} alt="" className="react-icon" />
          </div>
          <div className="w-secCircle">
            <img src={Node} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Main} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Mongo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Js} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
