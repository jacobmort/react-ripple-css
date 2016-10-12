import React, { Component, PropTypes } from 'react';
import './Ripple.css';

const DEFAULT_STATE = {
  animating: false
}

class Ripple extends Component {
  static defaultProps= {
      color: "white"
  }
  constructor() {
    super();
    this.state = Object.assign({}, DEFAULT_STATE);
  }

  componentWillReceiveProps(e) {
    this.setState({
      animating: true
    });
    setTimeout(() => {
       this.setState(Object.assign({}, DEFAULT_STATE));
    }, 950);
  }

  render() {
    const rippleClass = this.state.animating ? "ripple ripple-effect" : "ripple";
    const maxDimension = Math.max(this.props.containerWidth, this.props.containerWidth);
    const rippleStyle = {
      top: `${this.props.yPos - (maxDimension/2)}px`,
      left: `${this.props.xPos - (this.props.containerWidth/2)}px`,
      width: this.props.rippleWidth ? this.props.rippleWidth : maxDimension,
      height: this.props.rippleHeight ? this.props.rippleHeight : maxDimension,
      background: this.state.animating ? this.props.color : "rgba(0,0,0,0)",
      display: this.state.animating ? "block" : "none"
    }
    return (
      <span style={rippleStyle} className={rippleClass}></span>
    );
  }
}

Ripple.propTypes = {
  containerWidth:PropTypes.number,
  containerHeight:PropTypes.number,
  rippleWidth: PropTypes.number,
  rippleHeight: PropTypes.number,
  xPos:PropTypes.number,
  yPos:PropTypes.number,
  color: PropTypes.string
}

export default Ripple;
