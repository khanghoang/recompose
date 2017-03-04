import React, { Component } from 'react';
import compose from '../compose';

describe('compose', () => {
  it('should work properly', () => {
    const func1 = jest.fn(x => x + 2);
    const func2 = jest.fn(x => x * 3);
    const func3 = jest.fn(x => x - 1);
    const val = 10;
    const result = compose(
      func1,
      func2,
      func3
    )(val);
    expect(result).toEqual(func1(func2(func3(val))));
  });
});
