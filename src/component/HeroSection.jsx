import { useInView } from "framer-motion";
import { useRef } from "react"
import heroImage from "../pics/hero-image"
import './HeroSection.css'

export default function HeroSection () {

  const ref = useRef(null);
  const isInView = useInView(ref)

  return (

    <div className="hero-section">
      <img src={heroImage} alt="minimalist male painting"/>
      <div className="hero-section-text" ref={ref} style={{
        transform: isInView ? 'none' : "translateX(-30rem)",
        opacity: isInView ? 1 : 0,
        transition: "all 1.2s ease-in-out"
      }}>
        <h1>hello</h1>
        <h4>i'm eddy, full stack dev</h4>
        <h4>I'm a recent Coder Academy Sydney graduate and developer at Future Friendly.</h4> 
        <p>Currently coding with: python | react | javascript | html | css</p>
      </div>

    </div>
  )
}