import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useDataContext } from "../context/ProjectContext"
import "./ProjectTemplate.css"

export default function ProjectTemplate(props) {

  const {id} = useParams()
  const projectGlobalData = useDataContext();
  const [project, setProject] = useState({})

  useEffect(()=> {
    let result = projectGlobalData.find((item)=> item.id === parseInt(id))
    setProject(result)
  },[id, projectGlobalData])

  return (
    <div className="project-template-container">
    {project ? (
      <div className="project-template">
        <h1 className="project-label">Project</h1>
        <h2 className="project-title">{project.title}</h2>
        <div className="project-content">
          <img src={project.img} alt="" />
          <div className="project-textPart">  
            <ul className="project-code">
              {project?.code?.map((code) => <li key={code}>{code}</li> )}
            </ul>
            <p className="project-info">
              <a href="">{project.githubURL}</a>
              <p className="multiline-paragraph">{project.content}</p>
            </p>
          </div>
        </div>
      </div>) : (
        <div>Loading...</div>
      )
    }
    </div>

  )
}