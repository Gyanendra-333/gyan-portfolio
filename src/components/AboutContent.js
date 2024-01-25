import { Link } from "react-router-dom";
import "./AboutContent.css";
import React1 from "../assets/go-holidays.png";
import React2 from "../assets/e-commerce.png";


import React from 'react'

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who I am ?</h1>
                <p>I am a React Front-End Developer. I Create Responsive secure Website.</p>
                <Link to="/contact">
                    <button className="btn">Contact me</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">

                    <div className="img-stack top">
                        <img className="img" src={React1} alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img className="img" src={React2} alt="true" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AboutContent;