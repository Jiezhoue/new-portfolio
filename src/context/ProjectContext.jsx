import { createContext, useContext, useReducer } from "react";
import pic1 from '../pics/pic1.png';
import pic2 from '../pics/pic2.png';
import pic3 from '../pics/pic3.png';
import pic4 from '../pics/pic4.png';
import pic5 from '../pics/pic5.png';

const initialProjectData = [
  {id: 1, title: "project1", content: "project1", img: pic1, code: ["CSS", "JAVASCRIPT"]},
  {id: 2, title: "project1", content: "project1", img: pic2, code: ["CSS", "JAVASCRIPT"]},
  {id: 3, title: "project1", content: "project1", img: pic3, code: ["CSS", "JAVASCRIPT"]},
  {id: 4, title: "project1", content: "project1", img: pic4, code: ["CSS", "JAVASCRIPT"]},
  {id: 5, title: "project1", content: "project1", img: pic5, code: ["CSS", "JAVASCRIPT"]},
  {id: 6, title: "project1", content: "project1", img: pic5, code: ["CSS", "JAVASCRIPT"]},
]

export const ProjectDataContext = createContext(null);
export const ProjectDataDispatch = createContext(null);

export function useDataContext(){
  return useContext(ProjectDataContext);
}

export function useDataDispatch(){
  return useContext(ProjectDataDispatch)
}

const projectReducer = (previousState, instructions) => {
  let editableState = [...previousState];
  switch(instructions.type) {
    case "add":
      break;
    case "update":
      break;
    case "delete":
      break;
    default:
      return previousState
  }
}

export default function ProjectProvider (props) {

  const [projectData, projectDispatch] = useReducer(projectReducer, initialProjectData)
  
  return (
    <ProjectDataContext.Provider value={projectData}>
      <ProjectDataDispatch.Provider value={projectDispatch}>
        {props.children}
      </ProjectDataDispatch.Provider>
    </ProjectDataContext.Provider>
  )
}