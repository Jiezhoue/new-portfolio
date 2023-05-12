import { useState, useEffect } from 'react'
import './HomePage.css'
import HeroSection from '../component/HeroSection';
import ProjectGallery from '../component/ProjectGallery';
import NavBar from '../component/NavBar';
import NavBarDesktop from '../component/NavBarDesktop'
import ProjectCard from '../component/ProjectCard';
import pic1 from '../pics/pic1.png';
import pic2 from '../pics/pic2.png';



export default function HomePage() {


  return (
    <div className='homePage'>
      <NavBar />
      <HeroSection />
      <ProjectCard name={pic1}/>
      <ProjectCard name={pic2}/>

      <ProjectCard name={pic1}/>
      <ProjectCard name={pic1}/>

    </div>
  )
}