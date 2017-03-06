import React, { Component, PropTypes } from 'react';

export default function inject (name) {
  return WrappedComponent => class extends Component {
    static contextTypes = {
      [name]: PropTypes.any
    };

    render () {
      return (
        <WrappedComponent
          {...this.props}
          {...{ [name]: this.context[name] }}
        />
      );
    };
  };
};
