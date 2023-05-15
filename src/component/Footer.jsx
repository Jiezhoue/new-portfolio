import { NavLink } from "react-router-dom";
import { GrProjects} from "react-icons/gr"
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsPeopleFill} from 'react-icons/bs'
import './Footer.css'

export default function Footer(){

  return (
    <ul className="footer-container">
      <li ><NavLink className="footer-list" to='/'><GrProjects /></NavLink></li>
      <li ><a href="https://github.com/Jiezhoue" target="_blank" className="footer-list"><BsGithub /></a></li>
      <li ><a href="https://github.com/Jiezhoue" target="_blank" className="footer-list" to='/'><BsLinkedin /></a></li>
      <li ><NavLink className="footer-list" to='/'><BsPeopleFill /></NavLink></li>
    </ul>
  )
}