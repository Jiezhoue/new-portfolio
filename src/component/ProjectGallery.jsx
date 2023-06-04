import { useDataContext } from "../context/ProjectContext"
import ProjectCard from "./ProjectCard"
import "./ProjectGallery.css"


export default function ProjectGallery(props) {
  
  const projectGlobalData = useDataContext()

  return (
    <div className="gallery-container">
      {/* <ProjectCard name={ImgUrl[0]}/>
      <ProjectCard name={ImgUrl[0]}/>
      <ProjectCard name={ImgUrl[0]}/>
      <ProjectCard name={ImgUrl[0]}/>
      <ProjectCard name={ImgUrl[0]}/> */}
      {projectGlobalData.map((project)=><ProjectCard name={project}/>)}
    </div>
  )
}