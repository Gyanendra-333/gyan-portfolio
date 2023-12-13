import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectHeroImg from '../components/ProjectHeroImg';

const Project = () => {
    return (
        <div>
            <Navbar />
            <ProjectHeroImg heading="Projects" text="Some of My Most Recent Works." />
            <Footer />
        </div>
    )
}

export default Project;