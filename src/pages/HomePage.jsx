import '../pages/HomePage.css'
import HeroSection from '../component/HeroSection';
import ProjectGallery from '../component/ProjectGallery';
import Contact from '../component/Contact';




export default function HomePage(props) {


  return (
    <div className='homePage'>
      <HeroSection />
      <ProjectGallery />
      <Contact />
    </div>
  )
}