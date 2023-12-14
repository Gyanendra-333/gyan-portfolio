import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectHeroImg from '../components/ProjectHeroImg'
import AboutContent from '../components/AboutContent'

const About = () => {
    return (
        <div>
            <Navbar />
            <ProjectHeroImg heading="About" text="I Am A Friendly Front-End Developer." />
            <AboutContent />
            <Footer />
        </div>
    )
}

export default About;