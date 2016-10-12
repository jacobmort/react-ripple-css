import React from 'react';
import Ripple from './Ripple';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  renderer.create(<Ripple />);
});
