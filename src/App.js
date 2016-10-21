import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Ripple from './Ripple/Ripple';
import RippleHelper from './Ripple/RippleHelper';

class App extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = RippleHelper.getInitialState();
  }

  handleClick(e) {
    this.setState(
      Object.assign(this.state, RippleHelper.handleClick(e))
    );
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
