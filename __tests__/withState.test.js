import { mount } from 'enzyme';
import React from 'react';
import withState from '../withState';

describe('withState function', () => {
  it('returns a function', () => {
    expect(typeof withState).toBe('function');
  });
  it('works properly', () => {
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
  it('calls callback function after set state', () => {
    const mockCallback = jest.fn();
    const withStateEnhance = withState('foo', 'setFoo', 'bar', mockCallback);
    const Component = jest.fn(() => null);
    const EnhancedComponent = withStateEnhance(Component);
    mount(<EnhancedComponent />);
    const { setFoo } = Component.mock.calls[0][0];
    setFoo('hi');
    expect(mockCallback).toBeCalled();
  });
  it('has updater which is function', () => {
    const props = { otherProps: 'dummy' };
    const expected = 'hello';

    const withStateEnhance = withState('foo', 'setFoo', 'bar');
    const Component = jest.fn(() => null);
    const EnhancedComponent = withStateEnhance(Component);
    mount(<EnhancedComponent {...props} />);

    const { setFoo } = Component.mock.calls[0][0];
    const mock = jest.fn(() => expected);
    setFoo(mock);
    const { foo: actual } = Component.mock.calls[1][0];
    
    expect(actual).toBe(expected);
    expect(mock).toBeCalledWith(props);
  });
});
