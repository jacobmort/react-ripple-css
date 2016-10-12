import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Ripple from './Ripple/Ripple';

class App extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      containerHeight: null,
      containerWidth: null,
      clickXPos: null,
      clickYPos: null
    }
  }

  handleClick(e) {
    const rect = e.target.getBoundingClientRect();
    this.setState({
      containerHeight: rect.height,
      containerWidth: rect.width,
      clickXPos: e.pageX,
      clickYPos: e.pageY
    });
  }
  render(){
    return(
      <div className="container">
        <Ripple
          containerWidth={this.state.containerWidth}
          containerHeight={this.state.containerHeight}
          xPos={this.state.clickXPos}
          yPos={this.state.clickYPos}
        />
        <a href="#" onClick={this.handleClick}>
          <span>Click Me</span>
        </a>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
