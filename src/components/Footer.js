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

                    <h4>About Myself</h4>
                    <p>Hey, This is Gyanendra Prakash. I am Frontend Developer. I have good knowledge of HTML, CSS and Javascript.</p>

                    <div className="social">
                        <a href="https://www.facebook.com"><FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                        <a href="https://www.facebook.com"><FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                        <a href="https://www.facebook.com"><FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;