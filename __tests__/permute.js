import permute from '../src/permute';

describe('string permutations', () => {
  it('throws when the first argument is not a string', () => {
    expect(() => permute()).toThrow();
  });

  it('produces an array', () => {
    expect(permute('abc', {})).toEqual([]);
  });
});
