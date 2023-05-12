import { useState, useEffect } from 'react'
import './HomePage.css'
import HeroSection from '../component/HeroSection';
import ProjectGallery from '../component/ProjectGallery';
import NavBar from '../component/NavBar';
import NavBarDesktop from '../component/NavBarDesktop'
import ProjectCard from '../component/ProjectCard';


export default function HomePage() {





  return (
    <div className='homePage'>
      <NavBar />
      <HeroSection />
      <ProjectCard />
      <ProjectCard />

      <ProjectCard />
      <ProjectCard />

    </div>
  )
}