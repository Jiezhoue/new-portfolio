
import ProjectGallery from "../component/ProjectGallery";
import './ProjectPage.css';


import AboutMe from "../component/AboutMe";



export default function ProjectPage () {
  return (
    <div className='projectPage'>
      <AboutMe>
        <p>
        Hello, I am Eddy, a seasoned full-stack developer. I recently completed my studies at Coder Academy Sydney, where I cultivated a solid understanding of programming and development principles. 
        </p>
        <p>
        Proficient in an array of technologies, including Python, React, JavaScript, HTML, and CSS, I possess the skill set necessary to construct resilient and dynamic web applications. 
        </p>
        <p>
        My unwavering passion lies in crafting inventive solutions while keeping pace with the ever-evolving trends within the industry. With a commitment to excellence, I continuously strive to push the boundaries of innovation."
        </p>
      </AboutMe>
      <ProjectGallery />

  </div>
  )
}