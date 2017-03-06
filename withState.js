import React, { Component } from 'react';
export default (stateName, setStateFnName, defaultValue, callbackFn = () => {}) =>
(BaseComponent) => props => {
  class StatefulComponent extends Component {
    constructor() {
      super();
      const serializeSetStateArg = (val) => {
        if (typeof val === 'function') {
          return val(this.props);
        }
        return val;
      }
      const setStateFnProp = (val) => {
        this.setState({
          [stateName]: serializeSetStateArg(val),
        }, callbackFn);
      };

      this.state = {
        [stateName]: defaultValue,
        [setStateFnName]: setStateFnProp,
      }
    }

    render() {
      return (
        <BaseComponent {...props} {...this.state} />
      )
    }
  }

  return (
    <StatefulComponent {...props} />
  )
}
