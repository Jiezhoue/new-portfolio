import { NavLink } from "react-router-dom";
import { GrProjects} from "react-icons/gr"
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsPeopleFill} from 'react-icons/bs'
import './Footer.css'

export default function Footer(){

  return (
    <div className="footer">
    <ul className="footer-container">
      <li ><a className="footer-list" href='/project'><GrProjects /></a></li>
      <li ><a href="https://github.com/Jiezhoue" target="_blank" rel="noreferrer" className="footer-list"><BsGithub /></a></li>
      <li ><a href="https://www.linkedin.com/in/jie-zhou-0a72068a/" rel="noreferrer" target="_blank" className="footer-list" to='/'><BsLinkedin /></a></li>
      <li ><a href="/#contact" className="footer-list" to='/'><BsPeopleFill /></a></li>
    </ul>
    </div>

  )
}