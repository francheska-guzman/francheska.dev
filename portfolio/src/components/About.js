import React, { Component } from 'react';

import picture from "../assets/images/about-picture.jpg";

class About extends Component {
  render() {
    return (
      <div className='wrapper about'>
        <h2>About</h2>
        <div className="flex">
	        <img src={picture} alt="Francheska Guzman" />
	          <p className="introduction">Francheska is a passionate web developer based in Puerto Rico. She has worked for over a year coding and delivering E-mail Marketing Campaings, as well as provide website maintenance to the <a href="https://www.nyfa.edu/" target="_black">New York Film Academy (NYFA)</a>. Her current role at NYFA is both coding and testing the new version of the Online Applications.</p>
            <p>Early 2018 she joined <a href="http://www.secondlanguagedesign.com/" target="_black">Second Language Design</a>, a boutique NYC-based creative agency where she has contributed in building WordPress websites for clients such as <a href="https://painfreecats.org/" target="_black">The North Carolina State University’s College of Veterinary Medicine</a> and <a href="http://aprpc.com/" target="_black">Acupuncture Remedies</a>.</p>
            <p>Prior to her experience as a web developer, she was a member of <a href="https://www.utest.com/" target="_black">uTest</a>, a crowdsourced software testing community. Francheska has tested web and native applications by performing localization and exploratory testing, as well as executing test cases across modern platforms and devices. </p>
        </div>
      </div>
    );
  }
}

export default About;