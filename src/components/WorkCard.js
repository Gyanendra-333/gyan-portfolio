import "./WorkCard.css";
// import pro1 from "../assets/img02.png";

import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
    return (

        <div className="project-card">
            <img src={props.imgsrc} alt="img"></img>
            <h2 className="project-title">{props.title} </h2>
            <div className="pro-details">
                <p>{props.text} </p>
                <div className="pro-btns">
                    <NavLink target="_blank" to={props.view} className="btn">View</NavLink>
                    <NavLink target="_blank" to="url.com" className="btn">Source</NavLink>
                </div>
            </div>
        </div>

    )
}

export default WorkCard;