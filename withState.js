import React, { Component } from 'react';
export default (stateName, setStateFnName, defaultValue) =>
(BaseComponent) => props => {
  class StatefulComponent extends Component {
    constructor() {
      super();
      const setStateFnProp = (val) => {
        this.setState({
          [stateName]: val,
        });
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
