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
    let rippleStyle = {};

    if (this.state.animating){
      const maxDimension = Math.max(this.props.containerWidth, this.props.containerWidth);
      rippleStyle.top= `${this.props.yPos - (maxDimension/2)}px`;
      rippleStyle.left= `${this.props.xPos - (this.props.containerWidth/2)}px`;
      rippleStyle.width= this.props.rippleWidth ? this.props.rippleWidth : maxDimension;
      rippleStyle.height= this.props.rippleHeight ? this.props.rippleHeight : maxDimension;
      rippleStyle.background= this.props.color;
      rippleStyle.display= "block";
    } else {
      rippleStyle.display= "none";
    }

    return (
      <span style={rippleStyle} className={rippleClass}></span>
    );
  }
}

Ripple.propTypes = {
  containerWidth:PropTypes.number,
  containerHeight:PropTypes.number,
  xPos:PropTypes.number,
  yPos:PropTypes.number,
  rippleWidth: PropTypes.number,
  rippleHeight: PropTypes.number,
  color: PropTypes.string
}

export default Ripple;
