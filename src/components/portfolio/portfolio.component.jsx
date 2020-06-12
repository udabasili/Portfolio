import React, { Component } from 'react';
import Slide from '../../components/slides/slide';

class Portfolio extends Component {
	render() {
		return (
			<section id='portfolio' className='section-portfolio'>
				<h2 className="header-secondary">
					Projects
				</h2>
				<Slide />
			</section>
		);
	}
}

export default Portfolio;
