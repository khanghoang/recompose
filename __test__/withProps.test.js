import { spy } from 'sinon';
import { mount } from 'enzyme';
import React from 'react';
import withProps from '../withProps';

describe('withProps', () => {
  it('should be map props successfully', () => {
    const Component = spy(() => null);
    const EnhanceComponent = withProps(() => ({
      foo: 'bar',
    }))(Component);

    mount(<EnhanceComponent dog='cat' foo='bar2' />);

    const expected = { dog: 'cat', foo: 'bar' };
    const actual = Component.firstCall.args[0];

    expect(actual).toEqual(expected);
  });
});
