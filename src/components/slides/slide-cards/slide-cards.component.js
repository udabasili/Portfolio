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
        <img className="slide-image" style={{width:"100%"}} src={image} alt='' />
        <div className="slide-text">
          <h1 className="slide-title header-tertiary">{name}</h1>
            <div className="bottom-text-box">
            <p className="slide-description">{description}</p>
            <a className="secondary-button" rel="noopener noreferrer"  target="_blank"  href={link}>Visit</a>
            <a className="secondary-button" rel="noopener noreferrer" target="_blank" href={github}>Github</a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SlideCard;
