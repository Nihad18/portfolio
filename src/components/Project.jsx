import React from "react";

const Project = ({
  image,
  tag,
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
        <p className='tag'>{tag}</p>
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
