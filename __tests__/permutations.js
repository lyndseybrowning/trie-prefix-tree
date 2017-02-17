import permutations from '../src/permutations';

describe('string permutations', () => {
  it('throws when the first argument is not a string', () => {
    expect(() => permutations()).toThrow();
  });

  it('produces an array', () => {
    expect(permutations('abc', {})).toEqual([]);
  });
});
