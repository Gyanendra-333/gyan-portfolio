import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectHeroImg from '../components/ProjectHeroImg';
import Card from '../components/Card';

const Project = () => {
    return (
        <div>
            <Navbar />
            <ProjectHeroImg heading="Projects" text="Some of My Most Recent Works." />
            <Card />
            <Footer />
        </div>
    )
}

export default Project;