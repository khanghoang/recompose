import React, { Component } from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import compose from '../compose';
import pure from '../pure';
import inject from '../inject'

describe('pure', () => {
  class Title extends Component {
    render () {
      return (
        <h1>{this.props.text}</h1>
      );
    };
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

  it('should play nice with injected component', () => {
    const EnhancedTitle = compose(inject('text'), pure)(Title);
    const wrapper = mount(<EnhancedTitle />, { context: { text: 'foo' } });
    wrapper.setContext({ text: 'bar' });
    wrapper.update();

    expect(wrapper.text()).toEqual('bar');
    expect(Title.prototype.render.callCount).toEqual(2);
  });
});
