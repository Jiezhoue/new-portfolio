import { useState, useEffect } from 'react'
import '../pages/HomePage.css'
import HeroSection from '../component/HeroSection';
import ProjectGallery from '../component/ProjectGallery';
import NavBar from '../component/NavBar';
import ProjectCard from '../component/ProjectCard';
import pic1 from '../pics/pic1.png';
import pic2 from '../pics/pic2.png';
import pic3 from '../pics/pic3.png';
import pic4 from '../pics/pic4.png';
import pic5 from '../pics/pic5.png';

import Footer from '../component/Footer';

const projectImg = [pic1, pic2, pic3, pic4, pic5]

export default function HomePage(props) {


  return (
    <div className='homePage'>
      <HeroSection />
      <ProjectGallery ImgUrl={projectImg}/>
      <Footer />

    </div>
  )
}