import React from 'react';
import './homepage.styles.scss';
import Services from '../../components/services/services.component';
import Portfolio from '../../components/portfolio/portfolio.component';
import About from '../../components/about/about.components';

class HomePage extends React.PureComponent {
	constructor(){
		super();
		this.state={
		currentTime: new Date()
		}
	}

  	componentDidMount(){
	  	window.addEventListener('scroll', this.handleNavStyling)
		this.interval = setInterval(()=>{      
		this.setState({
			currentTime: new Date()
		})
		},1000)
	}

	handleNavStyling = (e) => {
		const nav = document.querySelector('.navigation-list');
		const headerSection = document.querySelector('#header').offsetHeight - nav.offsetHeight - 10;
		const projectSection = document.querySelector('#portfolio').offsetHeight + headerSection;
		const serviceSection = document.querySelector('#services').offsetHeight + projectSection;
		const navContainer = document.querySelectorAll('.navigation-item')
		if (window.scrollY >  nav.offsetHeight) {
			nav.style.backgroundColor = 'black'
		}
		else{
			nav.style.backgroundColor = 'transparent'

		}
		console.log(window.scrollY, serviceSection)
		if(headerSection < window.scrollY && window.scrollY < serviceSection){
			Array.from(navContainer).map((nav, i) => i === 1 ? 
				nav.style.color = 'white' : 
				nav.style.color = 'var(--color-primary)')

		}
		else if (window.scrollY > serviceSection){
			Array.from(navContainer).map((nav, i) => i === 2 ?
				nav.style.color = 'white' :
				nav.style.color = 'var(--color-primary)')

		}
		else{
			Array.from(navContainer).map((nav, i) => i === 0 ?
				nav.style.color = 'white' :
				nav.style.color = 'var(--color-primary)')

		}

		
	}
	componentWillUnmount(){
		clearInterval(this.interval)
		window.removeEventListener('scroll', this.handleNavStyling)
		};


	render() {
		let dateNow = this.state.currentTime;
		let hours = dateNow.getHours();
		let minutes = dateNow.getMinutes();
		let seconds = dateNow.getSeconds();
		let currentTimeFormatted = (
			`${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
		)
		return (
			<React.Fragment>
				<header className="header" id='header'>
					<div className="home-background-image" />
					<div className="header-text">
						<h1 className='header-primary'>
							<span className="header-primary__micro">HI! I am Udendu</span>
							<span className="header-primary__main">{currentTimeFormatted}</span>
							<span className="header-primary__sub"> The Full Stack Developer you need</span>
						</h1>
						<a className="start-button start-button-white" href="#portfolio">
							Get Started
					</a>
					</div>
				</header>
				<main>
					<Portfolio />
					<Services />
					<About/>
				</main>
			</React.Fragment>
			
		);
	}
}

export default HomePage;
