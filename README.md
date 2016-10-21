[![Build Status](https://travis-ci.org/ubien/react-ripple-css.svg?branch=master)](https://travis-ci.org/ubien/react-ripple-css.svg?branch=master)

# React Ripple CSS
React component for rendering Google Material Design-style ripples on click (or other) events.  One `<Ripple />` can handle click events from anywhere in the Component.

`RippleHelper` can be included in your parent component to aide in setting up state and handling clicks.

#### Usage
```js
...
import {Ripple, RippleHelper} from 'react-ripple-css';

class App extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state =
      Object.assign({SOME_STATE: SOME_VALUE}, RippleHelper.getInitialState()
      );
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

```
##### Ripple Props
```js
Ripple.propTypes = {
  containerWidth:PropTypes.number,
  containerHeight:PropTypes.number,
  xPos:PropTypes.number,
  yPos:PropTypes.number,
  rippleWidth: PropTypes.number,
  rippleHeight: PropTypes.number,
  color: PropTypes.string
}
```
