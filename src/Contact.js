import React from 'react';
import github from './github-original.svg';
import linkedin from './linkedin-original.svg';
import envelope from './envelope.svg';
import youtube from './youtube.svg';


function Contact() {
  return (
    <div className="cartBackground" >
      <div className="contactInfo" >
        <div>Contact Information</div>
        <a href="https://github.com/JeffLi117">
          <img src={github} alt="github icon" className="contactIcon" />
        </a>
        <a href="https://linkedin.com/in/jeffrey-li-do/">
          <img src={linkedin} alt="linkedin icon" className="contactIcon" />
        </a>
        <a href="li.jeffreyt@yahoo.com">
          <img src={envelope} alt="envelope icon" className="contactIcon" />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src={youtube} alt="youtube icon" className="contactIcon" />
        </a>
        <div>1234 Rush Hour Drive <br></br>Not Real City, CA, 99999</div>
      </div>
    </div>
  )
}

export default Contact