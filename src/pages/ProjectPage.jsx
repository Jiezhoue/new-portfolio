
import ProjectGallery from "../component/ProjectGallery";
import './ProjectPage.css';


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

  </div>
  )
}