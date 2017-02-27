import React, { Component } from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import compose from '../compose';
import pure from '../pure';

describe('pure', () => {
  class Title extends Component {
    render () {
      return (
        <h1>{this.props.text}</h1>
      )
    }
  };

  sinon.spy(Title.prototype, 'render');

  beforeEach(() => {
    Title.prototype.render.reset();
  });

  it('should make the component pure', () => {
    const EnhancedTitle = compose(pure)(Title);
    const wrapper = mount(<EnhancedTitle text='foo' />);
    wrapper.update();
    wrapper.setProps({ text: 'bar' });
    wrapper.update();

    expect(Title.prototype.render.callCount).toEqual(2);
  });
});
