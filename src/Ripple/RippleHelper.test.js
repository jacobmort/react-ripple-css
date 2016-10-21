import RippleHelper from './RippleHelper';

it('getInitialState() returns a new state', () => {
  let stateOne = RippleHelper.getInitialState();
  let stateTwo = RippleHelper.getInitialState();
  stateOne.containerHeight = 100;
  expect(stateOne.containerHeight).toBe(100);
  expect(stateTwo.containerHeight).toBe(null);
});
