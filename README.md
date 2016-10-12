## React Ripple CSS
React component for rendering Google Material Design-style ripples on click (or other) events.  One `<Ripple />` can handle click events from anywhere in the Component.

#### Usage
```js
Ripple.propTypes = {
  containerWidth:PropTypes.number,
  containerHeight:PropTypes.number,
  xPos:PropTypes.number,
  yPos:PropTypes.number,
  rippleWidth: PropTypes.number,
  rippleHeight: PropTypes.number,
  color: PropTypes.string.isOptional
}
```
```js
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

```
