import React from 'react';
import mapProps from './mapProps';

export default withPropsFn => Component => props => <Component {...props} {...withPropsFn(props)} />
