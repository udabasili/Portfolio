import React from 'react';
import './about.styles.css';

const  About = () => {
	return (
		<section id='bio' className='section-bio'>
			<h2 className="header-secondary" style={{color: 'black'}}>
				About Me
			</h2>
			<p className="about-paragraph">
				I am  proficient with JavaScript, CSS, HTML 5; along with most of their frameworks and libraries.
				I can build E-commerce websites with all the client and server-side functionalities, Blogs, Social media websites, etc.
				 and do bring great online presence to your business where necessary. 
				I am  skilled with HTML, CSS(Sass), JavaScript(React and Redux, Node(Express)), Python, Adobe Illustrator, MongoDB and  MySQL.

			</p>
			<div className="contact">
				<p className="email " style={{fontWeight: 'bold'}}>Email: udbasili@yahoo.com</p>
				<a rel="noopener noreferrer" 
					className='secondary-button' 
					target="_blank"
					href="https://github.com/udabasili">
					GitHub
				</a>  
				<a rel="noopener noreferrer" 
					className='secondary-button' 
					target="_blank" 
					href="https://www.dropbox.com/s/eo0cmxgxdrecqce/programming_resum.docx?dl=0">
					Resume
				</a>  
				<a rel="noopener noreferrer" 
					className='secondary-button' 
					href="https://www.linkedin.com/in/udendu-abasili-03b85239/" target="_blank">
					Linkedin
				</a>
			</div>                            
		</section>
	);
  
}


export default About;
