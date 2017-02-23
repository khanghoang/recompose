import React from 'react';

export default mapFn => (Component) => props => (<Component {...mapFn(props)} />);
