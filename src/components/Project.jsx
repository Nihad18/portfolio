import React from "react";

const Project = ({
  image,
  tag1,
  tag2,
  tag3,
  tag4,
  title,
  description,
  demoLink,
  codeLink,
}) => {
  return (
    <div className='project'>
      <div className='image-container'>
        <img className='image' src={image} alt={title + "image"} />
      </div>
      <div className='tags'>
        <p className='tag'>{tag1}</p>
        <p className='tag'>{tag2}</p>
        <p className='tag'>{tag3}</p>
        <p className='tag'>{tag4}</p>
      </div>
      <div className='title'>{title}</div>
      <div className='description'>{description}</div>
      <div>
        <a
          href={demoLink}
          target='_blank'
          rel='noreferrer'
          className='demoBtn btn'
        >
          Demo
        </a>
        <a
          href={codeLink}
          target='_blank'
          rel='noreferrer'
          className='codeBtn btn'
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default Project;
