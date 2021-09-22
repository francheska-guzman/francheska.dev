import React, { Component } from 'react';

import picture from "../assets/images/about-picture.png";

class About extends Component {
  render() {
    return (
      <div className='wrapper about'>
        <h2>About</h2>
        <div className="flex">
	        <img src={picture} alt="Francheska Guzman" />
                <p className="introduction">Francheska is a passionate software tester and web developer who has a background in accounting. Since late 2019 she started working at <a href="https://invidgroup.com" target="_black">INVID</a>, a full-service information technology company based in San Juan, Puerto Rico. </p>
			          <p>She has worked for over a year coding, testing, and delivering e-mail marketing campaigns, as well as providing website maintenance to the <a href="https://www.nyfa.edu/" target="_black">New York Film Academy</a> – School of Film and Acting. Her major project at NYFA was coding and testing the new version of the <a href="https://www.nyfa.edu/application/bfa1.php" target="_blank">online applications</a>, making the code easy to maintain and the form functional and user friendly.</p>
        	      <p>Early 2018 she joined <a href="http://www.secondlanguagedesign.com/" target="_black">Second Language Design</a>, a boutique NYC-based creative agency where she has contributed in building WordPress websites for clients such as the <a href="https://painfreecats.org/" target="_black">North Carolina State University's College of Veterinary Medicine</a> and <a href="http://aprpc.com/" target="_black">Acupuncture Remedies</a>. 
       	 	      Prior to her experience as a web developer, she was a member of <a href="https://www.utest.com/" target="_black">uTest</a>, a crowdsourced software testing community. Francheska has tested web and native applications by performing localization, exploratory and regression testing, as well as executing test cases across modern platforms and devices. </p>
        </div>
      </div>
    );
  }
}

export default About;