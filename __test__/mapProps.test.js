import { spy } from 'sinon';
import { mount } from 'enzyme';
import React from 'react';
import mapProps from '../mapProps';

describe('mapProps', () => {
  it('should be map props successfully', () => {
    const Component = spy(() => null);
    const EnhanceComponent = mapProps(props => ({
      ...props,
      foo: 'bar',
    }))(Component);

    mount(<EnhanceComponent dog='cat' />);

    const expected = { dog: 'cat', foo: 'bar' };
    const actual = Component.firstCall.args[0];

    expect(actual).toEqual(expected);
  });
});
