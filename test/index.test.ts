import onlyTruthy from '../src';

describe('onlyTruthy', () => {
  it('filters out all properties with falsy vales', () => {
    const object = {
      a: false,
      b: true,
      c: '',
      d: 0,
      e: 'yo',
      f: null,
      g: undefined,
      h: NaN,
    };

    expect(onlyTruthy(object)).toEqual({ b: true, e: 'yo' });
  });

  it('returns an empty object when null is received', () => {
    expect(onlyTruthy(null)).toEqual({});
  });
});
