import "./NavBar.css"
import {RxHamburgerMenu} from 'react-icons/rx'
import { useEffect, useState } from "react"
import {CgClose} from "react-icons/cg"
import {GrProjects} from "react-icons/gr"
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsPeopleFill} from 'react-icons/bs'
import { Navigate, NavLink } from "react-router-dom"


export default function NavBar(){

  const [expendMenu, setexpendMenu] = useState(false)


  const [windowWidth, setWindowWodth] = useState(500)

  useEffect(()=>{
    setWindowWodth(window.innerWidth)
  },[windowWidth])

  const handleClick = (event) => {
    setexpendMenu(!expendMenu)
    
  }


  return (
    <div className="container">
      <div className="NavBar">
        <a href='/' className="logo">
          eddy z
        </a>
        <div className="modal" style={{left: expendMenu && "0px"}}>
          <ul>
            <li><a href="/project" className="nav-link" onClick={handleClick}><GrProjects /> Projects</a></li>
            <li><a href="https://github.com/Jiezhoue" target="_blank" rel="noreferrer" className="nav-link" onClick={handleClick}><BsGithub/> Github</a></li>
            <li><a href="https://www.linkedin.com/in/jie-zhou-0a72068a/" target="_blank" rel="noreferrer" className="nav-link" onClick={handleClick}><BsLinkedin /> LinkedIn</a></li>
            <li><a href="/#contact"  className="nav-link" onClick={handleClick}><BsPeopleFill /> Contact</a></li>
          </ul>
        </div>
        {windowWidth < 500 ?
          <div className="hamburger-menu" onClick={handleClick}>
            {!expendMenu && <RxHamburgerMenu style={{fontSize: '2rem'}}/>}
            {expendMenu && <CgClose className="close-btn" style={{fontSize: '2rem'}}/>}
          </div>
          :
          null
        
        }


      </div>
    </div>   
  )
}