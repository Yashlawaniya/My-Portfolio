import React, { useContext, useRef, useState ,useEffect} from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
import { FaArrowUp } from 'react-icons/fa';
import { div } from "framer-motion/client";



const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)


  useEffect(() => {
    if (done) {
      const timer = setTimeout(() => {
        setDone(false); // 5 sec baad "Thanks..." message gayab
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [done]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y4225gv",
        "template_w48jrmd",
        form.current,
        "vVxXm8piwI09Z9Otl"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset(); 

        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact" >
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" className="user"  placeholder="Name"/>
          <input type="email" name="email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button button-hover-effect"/>
          {/* <span>{done && "Thanks for Contacting me"}</span> */}
          <span className={`thank-you ${done ? '' : 'hidden'}`}>
  Thanks for Contacting me
</span>


          {/* Go to Top button */}
          


          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>



<div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>

      </div>
    </div>
  );
};

export default Contact;
