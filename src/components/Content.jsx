import React from "react";
import {Helmet} from "react-helmet"
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";
import image from "../images/Web development _Outline.svg"
function Content() {
      <Helmet>
        <title>Home</title>
      </Helmet>
 
  return (
    <div className='content'>
      <div className='row'>
        <h1 className="mini-header">Hi!</h1>
        <h1 className="content-text">I AM NIHAD</h1>
        <h1 className="content-text">Balakishiyev</h1>
        <h1 className='typing-animation'>Front end developer</h1>
        <ul className='social-media-icons'>
          <li className='github icon'>
            <a
              href='https://github.com/Nihad18'
              target='_blank'
              rel='noreferrer'
            >
              <AiOutlineGithub />
            </a>
          </li>
          <li className='linkedin icon'>
            <a
              href='https://www.linkedin.com/in/nihad-balaki%C5%9Fiyev-544441213/'
              target='_blank'
              rel='noreferrer'
            >
              <AiOutlineLinkedin />
            </a>
          </li>
          <li className='facebook icon'>
            <a
              href='https://www.facebook.com/nihad.balakisiyev.71/'
              target='_blank'
              rel='noreferrer'
            >
              <AiOutlineFacebook />
            </a>
          </li>
        </ul>
      </div>

      <div className='row'>
      <img className="image" src={image} alt="image" />
      </div>

    </div>
  );
}

export default Content;
