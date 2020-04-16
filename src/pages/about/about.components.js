import React from 'react';
import './about.styles.css';
import Header from '../../components/header/header.component';


const  About = () => {

    return (
      <div>
        <Header />
        <main className="about_main">
          <section className="section-bio">
            <div className="profile-text-container">
              <h1 className="about-primary-header">Udendu Abasili</h1>
              <h2 className="about-secondary-header">About me</h2>
              <p className="about-paragraph">
                With more than 1 year of Front End Web Development, I am  proficient with JavaScript, Python, CSS, HTML 5; along with most of their frameworks and libraries.
                I have worked with HTML, CSS and JavaScript with a great focus on ReactJs framework and CSS Preprocessors such as Sass . I have also worked with API and AJAX, built web applications and mobile applications with Android. A lot of the work I have done to demonstrate my wide range of skills can be found on my portfolio and my GitHub page.
              </p>
              <div className="contact">
                <p className="email">Email: udbasili@yahoo.com</p>
                <a rel="noopener noreferrer" href="https://github.com/udabasili">GitHub</a>  
                <a  rel="noopener noreferrer" target="_blank" href="https://www.dropbox.com/s/eo0cmxgxdrecqce/programming_resum.docx?dl=0">Resume</a>  

                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/udendu-abasili-03b85239/" target="_blank">
                  Linkedin
                </a>
              </div>                            
            </div>
          </section>
        </main>
      </div>
    );
  
}


export default About;
