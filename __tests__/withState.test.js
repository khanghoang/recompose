import { mount } from 'enzyme';
import React from 'react';
import withState from '../withState';

describe('withState function', () => {
  it('returns a function', () => {
    expect(typeof withState).toBe('function');
  });
  it('work properly', () => {
    const withStateEnhance = withState('foo', 'setFoo', 'bar');
    const Component = jest.fn(() => null);
    const EnhancedComponent = withStateEnhance(Component);
    mount(<EnhancedComponent />);
    const { setFoo } = Component.mock.calls[0][0];
    const expected = 'hello';
    setFoo(expected);
    const { foo: actual } = Component.mock.calls[1][0];
    expect(actual).toBe(expected);
  });
});
