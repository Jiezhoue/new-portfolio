import { useState, useEffect } from 'react'
import '../pages/HomePage.css'
import HeroSection from '../component/HeroSection';
import ProjectGallery from '../component/ProjectGallery';
import NavBar from '../component/NavBar';
import ProjectCard from '../component/ProjectCard';
import pic1 from '../pics/pic1.png';
import pic2 from '../pics/pic2.png';

import Footer from '../component/Footer';

const projectImg = [pic1, pic2]

export default function HomePage() {


  return (
    <div className='homePage'>
      <NavBar />
      <HeroSection />
      <ProjectGallery ImgUrl={projectImg}/>
      <Footer />

    </div>
  )
}