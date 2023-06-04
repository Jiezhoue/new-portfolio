import '../pages/HomePage.css'
import HeroSection from '../component/HeroSection';
import ProjectGallery from '../component/ProjectGallery';




export default function HomePage(props) {


  return (
    <div className='homePage'>
      <HeroSection />
      <ProjectGallery />
    </div>
  )
}