import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectHeroImg from '../components/ProjectHeroImg';
import Card from '../components/Card';
import WorkCard from '../components/WorkCard';

const Project = () => {
    return (
        <div>
            <Navbar />
            <ProjectHeroImg heading="Projects" text="Some of My Most Recent Works." />
            <WorkCard />
            <Card />
            <Footer />
        </div>
    )
}

export default Project;