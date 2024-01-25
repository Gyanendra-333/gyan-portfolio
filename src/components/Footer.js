import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./Footer.css";

import React from 'react'

const Footer = () => {
    return (

        <div className="footer">
            <div className="footer-container">

                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p> <strong>Vrindavan Colony , </strong></p>
                            <p><strong>Bareilly , Uttar Pradesh.</strong></p>
                            <p><strong>India</strong></p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            +91 7355161229
                        </h4>
                    </div>

                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            pgyanendra333@gmail.com
                        </h4>
                    </div>

                </div>

                <div className="right">

                    <h4>About Something Myself -</h4>
                    <p>Hello, I am Gyanendra Prakash. I am Frontend Developer. I have good knowledge of HTML, CSS, JavaScript, React Js, Bootstrap and Basic DSA. And I have also Basic knowledge of Computer Networks, Operating System and DBMS.</p>

                    <div className="social">
                        <a target="_blank" href="https://www.facebook.com"><FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                        <a target="_blank" href="https://www.facebook.com"><FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/gyanendra-prakash-b625b0215/"><FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;