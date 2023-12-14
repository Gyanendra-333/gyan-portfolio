import "./WorkCard.css";
import pro1 from "../assets/img02.png";

import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = () => {
    return (

        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                <div className="project-card">
                    <img src={pro1} alt="img"></img>
                    <h2 className="project-tittle">Project Title</h2>
                    <div className="pro-details">
                        <p>This is Text</p>
                        <div className="pro-btns">
                            <NavLink to="url.com" className="btn">View</NavLink>
                            <NavLink to="url.com" className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard;