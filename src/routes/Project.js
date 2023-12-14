import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectHeroImg from '../components/ProjectHeroImg';
import Card from '../components/Card';
import Work from '../components/Work';

const Project = () => {
    return (
        <div>
            <Navbar />
            <ProjectHeroImg heading="Projects" text="Some of My Most Recent Works." />
            <Work />
            <Card />
            <Footer />
        </div>
    )
}

export default Project;