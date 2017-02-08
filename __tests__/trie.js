import trie from '../src/index';

describe('Trie', () => {
  it('throws an error when the first argument specified is not an array', () => {
    const input = 'string';
    const expected = `Expected parameter Array, received ${typeof input}`;

    try {
      trie(input);
    } catch(error) {
      expect(error).toEqual(expected);
    }
  });
});
