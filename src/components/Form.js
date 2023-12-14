import "./Form.css";

import React from 'react'

const Form = () => {
    return (

        <div className="form">
            <form>
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name here"></input>
                <label>Your Email</label>
                <input type="email" placeholder="Enter your email here"></input>
                <label>Subject</label>
                <input type="text" placeholder="Enter your subject here"></input>
                <label>Message</label>
                <textarea type="text" rows="6" placeholder="Type your message here"></textarea>
                <button className="btn">Send me</button>
            </form>
        </div>
    )
}

export default Form;