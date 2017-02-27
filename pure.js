import React, { Component } from 'react';
import shallowEqual from 'fbjs/lib/shallowEqual';

export default function pure (WrappedComponent) {
  return class extends Component {
    shouldComponentUpdate (nextProps) {
      return !shallowEqual(nextProps, this.props);
    };

    render () {
      return (
        <WrappedComponent {...this.props} />
      );
    };
  };
};
