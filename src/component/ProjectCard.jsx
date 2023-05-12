import React, { useState } from "react";
import pic1 from '../pics/pic2.png'
import '../component/ProjectCard.css'

export default function ProjectCard(props) {

  const [checkCard, setCheckCard] = useState(false)

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
          <img src={pic1} />
        </div>}
        {<div className="cards-content" style={ {visibility: checkCard && 'visible', opacity: checkCard && 1}}>
          <p>loru lorum lorum loru lorum lorumloru lorum loruml
          loru lorum lorum loru lorum lorumloru lorum loruml
          loru lorum lorum loru lorum lorumloru lorum lorumloru lorum lorumloru lorum lorum</p>
          <button className="cards-button">explore</button>
        </div>}
      </div>

  )
}