import './AboutMe.css'


export default function AboutMe(props) {

  return (
    <div className="aboutme-container">
      <p className="aboutme-text">
        {props.children}
      </p>
    </div>
  )
}