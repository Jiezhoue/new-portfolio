import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import ProjectGallery from "../component/ProjectGallery";
import './ProjectPage.css';
import pic1 from '../pics/pic1.png';
import pic2 from '../pics/pic2.png';
import pic3 from '../pics/pic3.png';
import pic4 from '../pics/pic4.png';
import pic5 from '../pics/pic5.png';

import AboutMe from "../component/AboutMe";



export default function ProjectPage () {
  return (
    <div className='projectPage'>
      <AboutMe>
      <p>
        My name is Eddy, and I am a full stack developer. 
      </p>
      <p>
        I recently graduated from Coder Academy Sydney, where I acquired a strong foundation in programming and development.
        I am proficient in a range of technologies including Python, React, JavaScript, HTML, and CSS. 
      </p>
      <p>
        With my expertise in these languages, I am capable of developing robust and dynamic web applications. 
        I am passionate about creating innovative solutions and staying up-to-date with the latest trends in the industry.
      </p>
      </AboutMe>
      <ProjectGallery />
      <Footer />

  </div>
  )
}