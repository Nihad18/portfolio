import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import cv from "../Nihad-Balakishiyev-CV.pdf";
function About() {
  <Helmet>
    <title>About</title>
  </Helmet>;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='about-container'
    >
      <div className='row'>
        <h1 className='header'>About me</h1>
        <p className='about-text'>
          My name is Nihad. In 2020, I entered the Faculty of Computer Sciences
          of Azerbaijan Technical University. As I am interested in web
          programming, I am learning frontend programming. I have 1 real
          project, this is the site of{" "}
          <a
            style={{ color: "#0ea5e9", borderBottom: "1px solid white" }}
            href='https://kovrolin.az/'
            target='_blank'
            rel='noreferrer noopener'
          >
            Kovrolin.az
          </a>{" "}
          company I am open to new job offers.
        </p>
        <a
          href={cv}
          target='_blank'
          download='Nihad-Balakisiyev-CV'
          className='buttonDownload'
          rel='noopener noreferrer'
        >
          Download CV
          <span>
            <span></span>
          </span>
        </a>
      </div>
    </motion.div>
  );
}

export default About;
