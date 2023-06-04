import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import '../component/ProjectCard.css'

export default function ProjectCard(props) {

  const {name} = props;

  const [checkCard, setCheckCard] = useState(false)
  const [redirectState, setRedirectState] = useState(false)

  const handleMouseEnter = () => {
    setCheckCard(true)
  }

  const handleMouseLeave = () => {
    setCheckCard(false)
  }

  return (
      <div className="project-card-container" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      >
        {<div className="cards-image">
          <img src={name.img} alt="" />
        </div>}
        {<div className="cards-content" style={ {visibility: checkCard && 'visible', opacity: checkCard && 1}}>
          <p>loru lorum lorum loru lorum lorumloru lorum loruml
          loru lorum lorum loru lorum lorumloru lorum loruml
          loru lorum lorum loru lorum lorumloru lorum lorumloru lorum lorumloru lorum lorum</p>
          <button className="cards-button" onClick={()=>setRedirectState(true)}>explore</button>
        </div>}
        {redirectState && <Navigate to= {"/project/" + name.id} />}
      </div>

  )
}