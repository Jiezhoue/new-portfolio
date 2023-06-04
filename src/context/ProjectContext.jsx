import { createContext, useContext, useReducer } from "react";
import pic1 from '../pics/pic1.png';
import pic2 from '../pics/pic2.png';
import pic3 from '../pics/pic3.png';
import pic4 from '../pics/pic4.png';
import pic5 from '../pics/pic5.png';
import pic6 from '../pics/pic6.png';

const initialProjectData = [
  { id: 1, 
    title: "What is Lorem Ipsum?", 
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset", 
    img: pic1, 
    code: ["CSS", "JAVASCRIPT"],
    githubURL: "aaaaaaa"
  },
  {
    id: 2, 
    title: "projWhat is Lorem Ipsum?ect1", 
    content: "The app I built is a dental practice online booking system. I was talking with my friends and some of them are dentists, they said most dental practices in Australia still rely on phone call systems for booking appointments. Cause most of the practice is only 1-3 dentists, implementing an online booking system can require additional investment and staff training. This may not be feasible for smaller dental practices or those with limited resources.\n\nBut transferring from a phone call booking system to an online booking system can provide numerous benefits for dental practices, including increased convenience, efficiency, accuracy, data insights, and patient engagement.", 
    shortDescription: "A dental practice online booking system, which can enhance communication between the practice and patients. Reminders and notifications can be automated, reducing no-shows and improving patient engagement.",
    img: pic4, 
    code: ["PYTHON", "FLASK", "PostgreSQL"],
    githubURL: "https://github.com/Jiezhoue/JieZhou_T2A2"
  },
  {
    id: 3, 
    title: "What is Lorem Ipsum?", 
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset", 
    img: pic3, 
    code: ["CSS", "JAVASCRIPT"],
    githubURL: "aaaaaaa"
  },
  {
    id: 4, 
    title: "What is Lorem Ipsum?", 
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset", 
    img: pic4, 
    code: ["CSS", "JAVASCRIPT"],
    githubURL: "aaaaaaa"
  },
  {
    id: 5, 
    title: "What is Lorem Ipsum?", 
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset", 
    img: pic5, 
    code: ["CSS", "JAVASCRIPT"],
    githubURL: "aaaaaaa"
  },
  {
    id: 6, 
    title: "First static HTML and CSS only portfolio website", 
    content: "As they crafted each section and designed the layout, the student discovered the power of HTML in structuring the content, creating headings, paragraphs, and lists. They learned how to incorporate images and enhance the visual appeal of their website through CSS. Through trial and error, they experimented with different color schemes, fonts, and layouts, gradually developing an eye for aesthetics and user experience. While parts of the portfolio website may not have achieved the level of perfection the student initially envisioned, they realized that this was a valuable part of the learning process. It taught them the importance of iteration, continuous improvement, and attention to detail. They learned to appreciate the beauty of incremental progress and the satisfaction that comes from tackling challenges head-on.Beyond technical skills, this journey of creating a portfolio website fostered the student's creativity and self-expression. They discovered the joy of translating their ideas into a tangible digital presence, showcasing their projects and achievements. They gained confidence in presenting their work and sharing it with others, nurturing their passion for programming.", 
    img: pic6, 
    code: ["CSS", "JAVASCRIPT"],
    githubURL: "aaaaaaa"
  },
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