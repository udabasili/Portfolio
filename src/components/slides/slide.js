import React, { Component } from 'react';
import './slide.css';
import SlideCards from './slide-cards/slide-cards.component';
import { applicationData } from '../../data/application-data.data';

export default class Slide extends Component {
  constructor() {
    super();
    this.state = {
      slideContent: applicationData,
      currentSlide: 0,
    	};
  	}

  	setSlideHandler(slideNumber){
		  this.setState({
			  currentSlide: slideNumber
		  })
	  }

	onClickRightButtonHandler =() => {
		if (this.state.currentSlide < 3) {
			this.setState((prevState) => ({ currentSlide: prevState.currentSlide + 1 }),
			() =>{ this.setButton(this.state.currentSlide) });
		} else {
		this.setState({ currentSlide: 0 },
			() =>{ this.setButton(this.state.currentSlide) });
		}
	}

	setButton = (slideNumber) => {
		const buttonContainer = document.querySelector(".button-container").childNodes;	
		buttonContainer.forEach((button, index) => {
			index === slideNumber ?
			button.classList.add("active-dot") :
			button.classList.remove("active-dot")

		})

	}

	onClickLeftButtonHandler =() => {
		if (this.state.currentSlide === 0) {
			this.setState({ currentSlide: 3 },
			() =>{ this.setButton(this.state.currentSlide) });
		} else {
		this.setState((prevState) => ({ currentSlide: prevState.currentSlide - 1 }),
		() =>{ this.setButton(this.state.currentSlide) });
		}
	}

	componentDidMount(){
		this.setButton(this.state.currentSlide)
	}
	render() {
      let i = this.state.currentSlide;
		return (
			<React.Fragment>
				 <div className="slide-container">
						<SlideCards 
							currentSlide={this.state.currentSlide}
							totalSlide={applicationData.length}
							key={applicationData[i].index} 
							slideData={applicationData[i]} />
						
					<a href="javascript:void(0)" className="left-button" onClick={this.onClickLeftButtonHandler}>&#10094;</a>
					<a href="javascript:void(0)" className="right-button" onClick={this.onClickRightButtonHandler}>&#10095;</a>
				</div>
				<br/>
				<div className="button-container">
					<span className="button button-1" onClick={() =>this.setSlideHandler(0)}></span> 
					<span className="button button-2" onClick={() => this.setSlideHandler(1)}></span> 
					<span className="button button-3" onClick={() =>this.setSlideHandler(2)}></span> 
					<span className="button button-4" onClick={() =>this.setSlideHandler(3)}></span> 

				</div>
			</React.Fragment>
         
		  );
		}
}
