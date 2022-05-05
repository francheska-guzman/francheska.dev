import React, { Component } from 'react';

import picture from "../assets/images/about-picture.png";

class About extends Component {
  render() {
    return (
      <div className='wrapper about'>
        <h2>About</h2>
        <div className="flex">
	        <img src={picture} alt="Francheska Guzman" />
                <p className="introduction">Francheska has 8+ years of combined experience in manual and automated software testing, quality assurance, and web development. She is currently working as a Software Test Engineer II at <a href="https://abarcahealth.com">Abarca Health</a>, a Pharmacy Benefit Management (PBM) company based in San Juan, PR.</p>
        </div>
      </div>
    );
  }
}

export default About;