import { mount } from 'enzyme';
import React from 'react';
import mapProps from '../mapProps';

describe('mapProps', () => {
  it('should be map props successfully', () => {
    const Component = jest.fn(() => null);
    const mapFunction = jest.fn(() => ({ foo: 'bar' }));
    const EnhanceComponent = mapProps(mapFunction)(Component);

    mount(<EnhanceComponent dog='cat' />, {});

    expect(mapFunction).toBeCalledWith({ dog: 'cat' })
    expect(Component.mock.calls[0][0]).toEqual({"foo": "bar"});
  });
});
