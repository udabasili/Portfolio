import React from 'react';
import './slide-cards.styles.css';


const SlideCard = ({ slideData, currentSlide, totalSlide }) => {
  console.log({currentSlide, totalSlide });
  
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
      {/* <section className="section-slide">
        <img className="application_image" alt={name} src={image} />
        <h1 className="slide-title">{name}</h1>
        <div className="bottom-text-box">
          <p className="slide-description">{description}</p>
          <ul className="slide-programs">
            <h2>Used: </h2>
            {programList.map((prog) => (
              <li className="slide-programs-list">{prog}</li>
            ))}
          </ul>
          <a className="slide-button" rel="noopener noreferrer" target="_blank"  href={link}>Open</a>
          <a className="slide-button" rel="noopener noreferrer" target="_blank" href={github}>Code</a>
        </div>
      </section> */}

    </React.Fragment>
     

  );
};


export default SlideCard;
