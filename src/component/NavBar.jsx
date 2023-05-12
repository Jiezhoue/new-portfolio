import "./NavBar.css"
import {RxHamburgerMenu} from 'react-icons/rx'
import { useEffect, useState } from "react"
import {CgClose} from "react-icons/cg"
import {GrProjects} from "react-icons/gr"
import {AiFillGithub} from 'react-icons/ai'
import {CiLinkedin} from 'react-icons/ci'
import {RiContactsLine} from 'react-icons/ri'
import { NavLink } from "react-router-dom"


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
        <div className="logo">
          eddy z
        </div>
        <div className="modal" style={{left: expendMenu && "0px"}}>
          <ul>
            <li><NavLink className="nav-link"><GrProjects /> Projects</NavLink></li>
            <li><NavLink className="nav-link"><AiFillGithub /> Github</NavLink></li>
            <li><NavLink className="nav-link"><CiLinkedin /> LinkedIn</NavLink></li>
            <li><NavLink className="nav-link"><RiContactsLine /> Contact</NavLink></li>
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