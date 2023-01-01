import React, { Component } from 'react';

import picture from "../assets/images/about-picture.png";

class About extends Component {
  render() {
    return (
      <div className='wrapper about'>
        <h2>About</h2>
        <div className="flex">
	        <img src={picture} alt="Francheska Guzman" />
                <p className="introduction">Francheska has born and raised in Puerto Rico. 
                She has 8+ years of combined experience in manual and automated software testing, 
                quality assurance, and web development. Francheska is currently working as a 
                Software Test Engineer II at Abarca Health and her hobbies are travel, go to the beach, 
                learn French, play El Cuatro Puertorriqueño, and spend quality time with family and friends.
                </p>
        </div>
      </div>
    );
  }
}

export default About;