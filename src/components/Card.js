import { Link } from "react-router-dom";
import "./Card.css";

import React from 'react'

const Card = () => {
    return (
        <div className="pricing">

            <div className="card-container">

                <div className="card">
                    <h3>- Basic -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 49</p>
                    <p>- 3 Days -</p>
                    <p>- 2 Pages -</p>
                    <p>- Features -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className="btn">Join Now</Link>
                </div>
                <div className="card">
                    <h3>- Premium -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 99</p>
                    <p>- 5 Days -</p>
                    <p>- 5 Pages -</p>
                    <p>- Features -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className="btn">Join Now</Link>
                </div>
                <div className="card">
                    <h3>- Business -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 149</p>
                    <p>- 7 Days -</p>
                    <p>- 9 Pages -</p>
                    <p>- Features -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className="btn">Join Now</Link>
                </div>

            </div>
        </div>
    )
}

export default Card;