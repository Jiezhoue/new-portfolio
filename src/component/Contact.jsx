import "./Contact.css"

export default function Contact (props) {

  return (
    <div id="contact" className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <div className="contact-details">
        <ul className="contact-list">
          <li className="contact-info">Eddy Zhou</li>

          <a className="contact-info" href="tel:0433 512 626" >0433 512 626</a>
          <a className="contact-info" href="mailto:eddy.zhouj@gmail.com">eddy.zhouj@gmail.com</a>
          <a className="contact-info" href="https://www.linkedin.com/in/jie-zhou-0a72068a/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/jie-zhou-0a72068a/</a>
        </ul>
      </div>
    </div>
  )
}