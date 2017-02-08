import trie from '../src/index';

describe('Trie', () => {
  it('throws an error when the first argument specified is not an array', () => {
    const input = 'string';
    const actual = trie(input);
    const expected = `Expected parameter Array, received ${typeof input}`;

    expect(actual).toEqual(expected);
  });
});
