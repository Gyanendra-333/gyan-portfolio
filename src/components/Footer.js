import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";
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
                            <p> <strong>Madhuvan Colony , </strong></p>
                            <p><strong>Shahjahanpur , Uttar Pradesh.</strong></p>
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

                <div className="right"></div>

            </div>
        </div>
    )
}

export default Footer;