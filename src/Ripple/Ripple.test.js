import React from 'react';
import Ripple from './Ripple';
import {mount, shallow} from 'enzyme';

jest.useFakeTimers();
let state = {};

const updatePropsSimulatingClick = (component) => {
  let state = {
    containerWidth: 100,
    containerHeight: 100,
    xPos: 500,
    yPos: 1000
  }
  component.setProps(state);
}

it('empty props renders without crashing', () => {
  expect(() => {mount(<Ripple />)}).not.toThrow();
});

describe('class tests', () => {
  it('renders with just ripple class', () => {
    const component = shallow(<Ripple />);
    expect(component.hasClass('ripple')).toBeTruthy();
    expect(component.hasClass('ripple-effect')).toBeFalsy();
  });

  it('adds ripple-effect on props update', () => {
    const component = shallow(<Ripple
      containerWidth={state.containerWidth}
      containerHeight={state.containerHeight}
      xPos={state.clickXPos}
      yPos={state.clickYPos}
      />)
      updatePropsSimulatingClick(component);
      expect(component.hasClass('ripple')).toBeTruthy();
      expect(component.hasClass('ripple-effect')).toBeTruthy();
  });

  it('removes ripple-effect after timeout', () => {
    const component = shallow(<Ripple
      containerWidth={state.containerWidth}
      containerHeight={state.containerHeight}
      xPos={state.clickXPos}
      yPos={state.clickYPos}
      />)
      updatePropsSimulatingClick(component);
      jest.runAllTimers();
      component.update();
      expect(component.hasClass('ripple')).toBeTruthy();
      expect(component.hasClass('ripple-effect')).toBeFalsy();
  });
})

describe('display tests', () => {
  const isDisplayed = (component) => {
    return component.html().indexOf('display:none') === -1;
  }

  beforeEach(() => {
    state = {
      containerHeight: null,
      containerWidth: null,
      clickXPos: null,
      clickYPos: null
    }
  });

  it('initially renders not displayed', () => {
    const component = shallow(<Ripple
      containerWidth={state.containerWidth}
      containerHeight={state.containerHeight}
      xPos={state.clickXPos}
      yPos={state.clickYPos}
      />)
    expect(isDisplayed(component)).toBeFalsy();
  });

  it('renders displayed on updated props', () => {
    const component = shallow(<Ripple
      containerWidth={state.containerWidth}
      containerHeight={state.containerHeight}
      xPos={state.clickXPos}
      yPos={state.clickYPos}
      />)
      updatePropsSimulatingClick(component);
      expect(isDisplayed(component)).toBeTruthy();
  });

  it('returns to hidden after timeout', () => {
    const component = shallow(<Ripple
      containerWidth={state.containerWidth}
      containerHeight={state.containerHeight}
      xPos={state.clickXPos}
      yPos={state.clickYPos}
      />)
      updatePropsSimulatingClick(component);
      jest.runAllTimers();
      component.update();
      expect(isDisplayed(component)).toBeFalsy();
  });
});
