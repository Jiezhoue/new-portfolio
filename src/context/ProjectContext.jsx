import { createContext, useContext, useReducer } from "react";
import pic1 from '../pics/pic1.png';
import pic2 from '../pics/pic2.png';
import pic3 from '../pics/pic3.png';
import pic4 from '../pics/pic4.png';
import pic5 from '../pics/pic5.png';
import pic6 from '../pics/pic6.png';

const initialProjectData = [
  { id: 1, 
    title: "React dynamic portfolio website", 
    content: "As a full-stack web developer, I leverage the power of React to create a mordern portfolio website that showcases my skills, projects, and experiences. It allows me to build a highly interactive and responsive user interface, providing a seamless browsing experience for visitors. \n\n With React, I can fetch my project data from data structure and render it dynamically on the Projects page. This allows me to easily update and manage my projects without manually editing the website's source code. \n\n One of the significant benefits of using React to build my portfolio website is the component-based architecture. I break down the website into reusable and modular components, such as Header, Footer, ProjectCard, etc. This modular approach promotes code reusability, maintainability, and scalability. It also enables me to efficiently manage the state of each component using React's state management, whether it's local component state or a global state managed by libraries like React Context.", 
    shortDescription: "As a full-stack web developer, I leverage the power of React to create a mordern portfolio website that showcases my skills, projects, and experiences.",
    img: pic3, 
    code: ["REACT", "JAVASCRIPT", "HTML", "CSS"],
    githubURL: "https://github.com/Jiezhoue/new-portfolio",
    deploy: "https://lucent-figolla-a402f3.netlify.app/"
  },
  {
    id: 2, 
    title: "Music box JAM", 
    content: "Jam is a music app that allows users to search for songs, add them to a playlist, and listen to them. Due to the nature of the Deezer API, the app is limited to 30 second previews of songs. \n\nBy default, the home page displays random albums, which provides a good way for users to explore and discover new music. The app is fully responsive and works on all screen sizes. We inplement tailwind css in this project.", 
    shortDescription: "Jam is a music app that allows users to search for songs, add them to a playlist, and listen to them. Due to the nature of the Deezer API, the app is limited to 30 second previews of songs. ",
    img: pic6, 
    code: ["React", "JAVASCRIPT", "HTML", "CSS"],
    githubURL: "https://github.com/theComponentsRepo/jam",
    deploy: "https://jam-music-player.netlify.app/"
  },
  {
    id: 3, 
    title: "API Websever Dental booking system", 
    content: "The app I built is a dental practice online booking system. I was talking with my friends and some of them are dentists, they said most dental practices in Australia still rely on phone call systems for booking appointments. Cause most of the practice is only 1-3 dentists, implementing an online booking system can require additional investment and staff training. This may not be feasible for smaller dental practices or those with limited resources.\n\nBut transferring from a phone call booking system to an online booking system can provide numerous benefits for dental practices, including increased convenience, efficiency, accuracy, data insights, and patient engagement.", 
    shortDescription: "A dental practice online booking system, which can enhance communication between the practice and patients. Reminders and notifications can be automated, reducing no-shows and improving patient engagement.",
    img: pic4, 
    code: ["PYTHON", "FLASK", "PostgreSQL"],
    githubURL: "https://github.com/Jiezhoue/JieZhou_T2A2"
  },
  {
    id: 4, 
    title: "Cupcake shop", 
    content: "The internet has changed the way we shop. Because of the numerous advantages and benefits, more and more people these days prefer buying things online over the conventional method of going into stores.\n\nConvenience is the biggest perk. Where else can you comfortably shop at midnight while in your pajamas? There are no lines to wait in or cashiers to track down to help you with your purchases, and you can do your shopping in minutes.\n\nThis app is designed to simulate the online shopping purchase and checkout process.", 
    shortDescription: "The internet has changed the way we shop. Because of the numerous advantages and benefits, more and more people these days prefer buying things online over the conventional method of going into stores.",
    img: pic2, 
    code: ["TERMINAL", "PYTHON"],
    githubURL: "https://github.com/Jiezhoue/JieZhou_T1A3"
  },

  {
    id: 5, 
    title: "React Todo List App", 
    content: "With its intuitive interface and seamless functionality, this Todo List app allows users to add, update, and delete notes with ease. By simply entering a new task or note, users can quickly create a comprehensive list to keep track of their daily, weekly, or long-term goals.\n\n The app's flexibility shines as users can easily update any existing note, ensuring their task list remains current and adaptable. Whether it's modifying due dates, adjusting title, or appending additional details, the app's editing feature ensures that users have full control over their notes.\n\n  To provide a clutter-free experience, the Todo List app empowers users to effortlessly remove completed or outdated tasks. With a simple click, users can delete any notes they no longer require, maintaining a clean and organized workspace.", 
    shortDescription: "This Todo List app to empower users to effortlessly manage their tasks and notes.",
    img: pic5, 
    code: ["React", "JAVASCRIPT", "HTML"],
    githubURL: "https://github.com/Jiezhoue/to-do-list-app",
    deploy: "https://comfy-tarsier-1481e5.netlify.app/"
    
  },
  {
    id: 6, 
    title: "First static HTML and CSS only portfolio website", 
    content: "As crafted each section and designed the layout, I discovered the power of HTML in structuring the content, creating headings, paragraphs, and lists. I learned how to incorporate images and enhance the visual appeal of the website through CSS. Through trial and error, experimented with different color schemes, fonts, and layouts, gradually developing an eye for aesthetics and user experience.\n\nWhile parts of the portfolio website may not have achieved the level of perfection I initially envisioned, but realized that this was a valuable part of the learning process. It taught me the importance of iteration, continuous improvement, and attention to detail.\n\nBeyond technical skills, this journey of creating a portfolio website fostered my creativity and self-expression. I discovered the joy of translating my ideas into a tangible digital presence, showcasing my projects and achievements. Kind of gained confidence in presenting my work and sharing it with others, getting some passion for programming.", 
    shortDescription: " This journey of creating a portfolio website fostered my creativity and self-expression. I discovered the joy of translating my ideas into a tangible digital presence, showcasing my projects and achievements.",
    img: pic1, 
    code: ["CSS", "HTML"],
    githubURL: "https://github.com/Jiezhoue/JieZhou_T1A2",
    deploy: "https://lucent-figolla-a402f3.netlify.app/"
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