class RippleHelper {
  static getInitialState() {
    return {
      containerHeight: null,
      containerWidth: null,
      clickXPos: null,
      clickYPos: null
    }
  }

  static handleClick(e) {
    const rect = e.target.getBoundingClientRect();
    return {
      containerHeight: rect.height,
      containerWidth: rect.width,
      clickXPos: e.pageX,
      clickYPos: e.pageY
    }
  }
}

export default RippleHelper
