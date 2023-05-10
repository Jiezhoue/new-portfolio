import "./NavBar.css"
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from "react"
import {IoMdClose} from "react-icons/io"


export default function NavBar(){

  const [expendMenu, setexpendMenu] = useState(false)

  const handleClick = (event) => {
    event.target.innerText = 'aaa'
    setexpendMenu(!expendMenu)
    
  }

  return (
    <div className="NavBar">
      <div className="logo">
        EDDY Z
      </div>
      <div className="hamburger-menu" onClick={handleClick}>
          {!expendMenu && <GiHamburgerMenu />}     
          {expendMenu && <IoMdClose />}ç
      </div>
      
    </div>
  )
}