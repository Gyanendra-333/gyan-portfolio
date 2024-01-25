import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectHeroImg from '../components/ProjectHeroImg'
import Form from '../components/Form'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <ProjectHeroImg heading="Contact Us" text="Let's Have A Chat." />
            <Form />
            <Footer />
        </div>
    )
}

export default Contact;