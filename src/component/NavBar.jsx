import "./NavBar.css"
import {RxHamburgerMenu} from 'react-icons/rx'
import { useState } from "react"
import {CgClose} from "react-icons/cg"
import {GrProjects} from "react-icons/gr"
import {AiFillGithub} from 'react-icons/ai'
import {CiLinkedin} from 'react-icons/ci'
import {RiContactsLine} from 'react-icons/ri'


export default function NavBar(){

  const [expendMenu, setexpendMenu] = useState(false)

  const handleClick = (event) => {
    event.target.innerText = 'aaa'
    setexpendMenu(!expendMenu)
    
  }

  return (
    <div className="container">

      <div className="NavBar">
        <div className="logo">
          eddy z
        </div>
        <div className="hamburger-menu" onClick={handleClick}>
            {!expendMenu && <RxHamburgerMenu style={{fontSize: '2rem'}}/>}
            {expendMenu && <CgClose className="close-btn" style={{fontSize: '2rem'}}/>}
        </div>
      </div>
      <div className="modal" style={{left: expendMenu && "0px"}}>
        <div className="nav-expand">
          {expendMenu && (
            <ul>
              <li><GrProjects /> Projects</li>
              <li><AiFillGithub /> Github</li>
              <li><CiLinkedin /> LinkedIn</li>
              <li><RiContactsLine /> Contact</li>
            </ul>
          )}
        </div>
      </div>

    </div>
    
  )
}