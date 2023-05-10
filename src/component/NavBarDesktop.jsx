import "./NavBar.css"
import {RxHamburgerMenu} from 'react-icons/rx'
import { useEffect, useState } from "react"
import {CgClose} from "react-icons/cg"
import {GrProjects} from "react-icons/gr"
import {AiFillGithub} from 'react-icons/ai'
import {CiLinkedin} from 'react-icons/ci'
import {RiContactsLine} from 'react-icons/ri'


export default function NavBar(){


  return (
    <div className="container">

      <div className="NavBar">
        <div className="logo">
          eddy z
        </div>
        <div className="modal">
          <div className="nav-expand">
              <ul>
                <li><GrProjects /> Projects</li>
                <li><AiFillGithub /> Github</li>
                <li><CiLinkedin /> LinkedIn</li>
                <li><RiContactsLine /> Contact</li>
              </ul>
          </div>
      </div>

      </div>


    </div>
    
  )
}