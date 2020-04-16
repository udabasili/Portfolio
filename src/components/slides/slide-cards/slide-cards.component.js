import React from 'react';
import './slide-cards.styles.css';


const SlideCard = ({ slideData }) => {

  const {
    name, 
    description, 
    image, 
    github,
    link,
    } = slideData;

  return (
    <React.Fragment>
      <div class="slide">
        <img className="slide-image" style={{width:"100%"}} alt={name} src={image} />
        <div class="slide-text">
          <h1 className="slide-title">{name}</h1>
          <div className="bottom-text-box">
            <p className="slide-description">{description}</p>
            <a className="slide-button" rel="noopener noreferrer"  target="_blank"  href={link}>Open</a>
            <a className="slide-button" rel="noopener noreferrer" target="_blank" href={github}>Code</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SlideCard;
