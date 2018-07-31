import React, { Component } from 'react';

import Data from './Data';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import P1_2 from "../assets/projects/p1-2.png";
import P1_3 from "../assets/projects/p1-3.png";

var description = "Representation of the web application.";

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Connect Four",
      description: "The classic two-player board game Connect Four. The objective of the game is to be the first to form an horizontal, vertical, or diagonal line of four of one's own token.",
      instructions: 'Refer to "How to Play" link located at the top of the board.',
      technologies: "HTML, CSS, and JavaScript.",
      live: "https://francheska-guzman.github.io/connect-four",
      code: "https://github.com/francheska-guzman/connect-four",
      api: null,
      carousel: [<img src={P1_2} alt={description} />, <img src={P1_3} alt={description} />]
    }
    this.project = this.project.bind(this);
    this.api = this.api.bind(this);
  }

  project(title, description, instructions, technologies, live, code, api, carousel) {
    this.setState({
      title: title,
      description: description,
      instructions: instructions,
      technologies: technologies,
      live: live,
      code: code,
      api: api,
      carousel: carousel
    });
  }

  api() {
    if (this.state.api !== null) {
      return ( <p><span><a href={this.state.api} target="_black">API</a></span></p> )
    };
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 8000,
      cssEase: "linear"
  };

    return (
      <div className='wrapper projects'>
        <h2>Projects</h2>
        <Data project={this.project} state={this.state} />
        <div className='project-image'>
          <h3>{this.state.title}</h3>
          <Slider {...settings}>
            <div className="proj">{this.state.carousel[0]}</div>
            <div className="proj">{this.state.carousel[1]}</div>
          </Slider>
        </div>
        <div className='project-data'>
          <div className='p-data-info'>
            <p><span>Description:</span> {this.state.description}</p>
            <p><span>Instructions:</span> {this.state.instructions}</p>
            <p><span>Technologies:</span> {this.state.technologies}</p>
          </div>
          <div className='p-data-links'>
            <p><span><a href={this.state.live} target="_black">Live Project</a></span></p>
            <p><span><a href={this.state.code} target="_black">GitHub Repository</a></span></p>
            {this.api()}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;