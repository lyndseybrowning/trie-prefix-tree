import trie from '../src/index';

const input = trie(['aah', 'aahs', 'aardvark', 'aalii', 'aal', 'baa', 'baal']);

describe('Getting prefixes', () => {
  it('throws an error when the given parameter is not a string', () => {
    expect(() => input.getPrefix()).toThrow();
  });

  it('returns an empty array when the given prefix is not found', () => {
    expect(input.getPrefix('dog')).toEqual([]);
  });

  it('returns a sorted array of words in the trie with the given prefix', () => {
    expect(input.getPrefix('aal')).toEqual(['aal', 'aalii']);
  });
});

test('Counting prefixes', () => {
  expect(() => input.getPrefix()).toThrow();
  expect(input.countPrefix('a')).toEqual(5);
  expect(input.countPrefix('ba')).toEqual(2);
  expect(input.countPrefix('dog')).toEqual(0);
});
