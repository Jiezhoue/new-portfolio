import ProjectCard from "./ProjectCard"
import "./ProjectGallery.css"


export default function ProjectGallery({ImgUrl}) {
  
  return (
    <div className="gallery-container">
      <ProjectCard name={ImgUrl[0]}/>
      <ProjectCard name={ImgUrl[0]}/>
      <ProjectCard name={ImgUrl[0]}/>
      <ProjectCard name={ImgUrl[0]}/>
      <ProjectCard name={ImgUrl[0]}/>
    </div>
  )
}