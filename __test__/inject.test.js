import React, { Component } from 'react';
import { mount } from 'enzyme';
import compose from '../compose';
import inject from '../inject';

describe('pure', () => {
  class Title extends Component {
    render () {
      return (
        <h1>{this.props.text}</h1>
      );
    };
  };

  it('should inject context into wrapped component via props', () => {
    const EnhancedTitle = compose(inject('text'))(Title);
    const wrapper = mount(<EnhancedTitle />, { context: { text: 'foo' } });
    expect(wrapper.text()).toEqual('foo');
  });
});
