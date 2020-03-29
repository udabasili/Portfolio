import React from 'react';
import './homepage.styles.css';

class HomePage extends React.PureComponent {
  constructor(){
    super();
    this.state={
      currentTime: new Date()
    }
  }

  componentDidMount(){
    this.interval = setInterval(()=>{      
      this.setState({
        currentTime: new Date()
      })
    },1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)

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
      <div className="home-page">
        <main>
          <div className="home-background-image" />
          <div className="home-page-clock">
            {currentTimeFormatted}
          </div>
          <div className="main-home-header">
            <div className="content__container">
                <p className="content__container__list__item"> Welcome To My World</p>
            </div>
          </div>
          <a className="get_started_button get_started_button-white" href="/projects">
              Get Started
            </a>
        </main>
      </div>
    );
  }
}

export default HomePage;
