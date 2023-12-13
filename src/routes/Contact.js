import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectHeroImg from '../components/ProjectHeroImg'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <ProjectHeroImg heading="Contact" text="Let's Have A Chat." />
            <Footer />
        </div>
    )
}

export default Contact;