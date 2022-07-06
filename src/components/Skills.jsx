import React from "react";
import { Helmet } from "react-helmet";
import ProgressBar from "./ProgressBar";
import Html from "../images/HTML5.png"
import Css from "../images/CSS3.png"
import Bootstrap from "../images/BOOTSTRAP5.png"
import Sass from "../images/SASS.png"
import ReactImg from "../images/REACT.png";
import Javascript from "../images/JAVASCRIPT.png"
import Git from "../images/GIT.png"
import Figma from "../images/FIGMA.png"

function Skills() {
  const skillData = [
    { bgcolor: "#6a1b9a", completed: 90 ,image: Html},
    { bgcolor: "#2965F1", completed: 80,image: Css},
    { bgcolor: "#553A7D", completed: 60 ,image: Bootstrap},
    { bgcolor: "#CD699B", completed: 60 ,image: Sass},
    { bgcolor: "#F0BE26", completed: 50 ,image: Javascript},
    { bgcolor: "#2965F1", completed: 50 ,image: ReactImg},
    { bgcolor: "#F34F29", completed: 40 ,image: Figma},
    { bgcolor: "#F34F29", completed: 30 ,image: Git},
  ];
      <Helmet>
        <title>Skills</title>
      </Helmet>
  return (
    <div className='skills'>
      <h1 className='skills-header'>Skills</h1>
      <div className='skills-container'>
      {skillData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} image={item.image} />
      ))}
      </div>
    </div>
  );
}

export default Skills;
