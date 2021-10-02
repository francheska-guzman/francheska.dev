import React, { Component } from 'react';

import Data from './Data';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import P2_2 from "../assets/images/p2-2.png";
import P2_3 from "../assets/images/p2-3.png";

var description = "Representation of the web application.";

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Weather Forecast", 
      description: "A weather web application that provides actual data of five cities such as minimum and maximum temperature, wind, humidity, and pressure.",
      instructions: "Select any city to get the detailed information about the weather conditions.",
      technologies: "HTML, CSS, JSX, and React.",
      live: "https://francheska-guzman.github.io/weather-forecast",
      code: "https://github.com/francheska-guzman/weather-forecast",
      api: "https://openweathermap.org/api",
      carousel: [<img src={P2_2} alt={description} />, <img src={P2_3} alt={description} />]
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
          <h4>{this.state.title}</h4>
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