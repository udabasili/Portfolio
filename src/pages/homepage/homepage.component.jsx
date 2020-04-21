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
            <h1 className="primary-header"> Welcome To My World</h1>
          </div>
          <a className="start-button start-button-white" href="/projects">
              Get Started
            </a>
        </main>
      </div>
    );
  }
}

export default HomePage;
