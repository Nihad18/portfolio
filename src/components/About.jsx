import React from "react";
import { Helmet } from "react-helmet";
import cv from "../CV.pdf";
function About() {
      <Helmet>
        <title>About</title>
      </Helmet>
  return (
    <div className='about-container'>
      <div className='row'>
        <h1 className='header'>About me</h1>
        <p className='about-text'>
          My name is Nihad. In 2020, I entered the Azerbaijan Technical
          University with a degree in Computer Science. I am learning front end
          programming because of my interest in the web programming. I am open
          to new job offers.
        </p>
        <a
          href={cv}
          target='_blank'
          download='Nihad-Balakishiyev-CV'
          className='buttonDownload'
          rel='noopener noreferrer'
        >
          Download CV
          <span>
            <span></span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default About;
