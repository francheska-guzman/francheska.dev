import React, { Component } from 'react';

import picture from "../assets/images/about-picture.png";

class About extends Component {
  render() {
    return (
      <div className='wrapper about'>
        <h2>About</h2>
        <div className="flex">
	        <img src={picture} alt="Francheska Guzman" />
                <p>Francheska has born and raised in Puerto Rico. 
                She has 8+ years of combined experience in manual and automated software testing, 
                quality assurance, and web development; and is currently working as a 
                Software Test Engineer at Abarca Health.</p>

                <p>Her hobbies are travel, go to the beach, 
                learn French, play Guiro and the Puerto Rican Cuatro, dance, and spend quality time with family and friends.
                </p>

                <p>Here you can find some of the projects she has worked on, download her must updated CV, and access to other profiles such as GitHub and LinkedIn. So feel free to connect! <span className="emoji-face">😊</span></p>
        </div>
      </div>
    );
  }
}

export default About;