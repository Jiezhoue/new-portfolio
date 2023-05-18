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
        <NavLink to='/' className="logo">
          eddy z
        </NavLink>
        <div className="modal" style={{left: expendMenu && "0px"}}>
          <ul>
            <li><NavLink className="nav-link"><GrProjects /> Projects</NavLink></li>
            <li><a href="https://github.com/Jiezhoue" target="_blank" className="nav-link"><BsGithub/> Github</a></li>
            <li><a href="https://github.com/Jiezhoue" target="_blank" className="nav-link"><BsLinkedin /> LinkedIn</a></li>
            <li><NavLink className="nav-link"><BsPeopleFill /> Contact</NavLink></li>
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