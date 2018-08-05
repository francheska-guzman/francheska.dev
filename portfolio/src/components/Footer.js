import React, { Component } from 'react';

import GitHub from "../assets/icons/github.png";
import ResumeCV from "../assets/icons/cv.png";
import LinkedIn from "../assets/icons/linkedin.png";

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <h6>Handmade by <a href="https://github.com/francheska-guzman" target="_black">Francheska Guzman</a>.</h6>
          <a href="https://github.com/francheska-guzman" target="_black"><img className="footer-icon" src={GitHub} alt="GitHub" /></a>
          <a href="https://francheska-guzman.github.io/resume/francheska-guzman-resume.pdf" target="_black"><img className="footer-icon" src={ResumeCV} alt="Resume/CV" /></a>
          <a href="https://www.linkedin.com/in/francheska-guzman" target="_black"><img className="footer-icon" src={LinkedIn} alt="LinkedIn" /></a>
      </div>
    );
  }
}

export default Footer;