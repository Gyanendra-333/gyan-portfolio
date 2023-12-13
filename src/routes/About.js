import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectHeroImg from '../components/ProjectHeroImg'

const About = () => {
    return (
        <div>
            <Navbar />
            <ProjectHeroImg heading="About" text="I Am A Friendly Front-End Developer." />
            <Footer />
        </div>
    )
}

export default About;