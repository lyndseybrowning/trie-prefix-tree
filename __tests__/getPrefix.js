import trie from '../src/index';

const words = ['aah', 'aahs', 'aardvark', 'aalii', 'aal', 'baa', 'baal'];
const input = trie(words);

describe('Getting prefixes', () => {
  it('throws an error when the first parameter is not a string', () => {
    expect(() => input.getPrefix()).toThrow();
  });

  it('returns all words with a zero-length prefix', () => {
    expect(input.getPrefix('').length).toEqual(words.length);
  });

  it('errors when the sort parameter is not boolean', () => {
    expect(() => input.getPrefix('aah', 123)).toThrow();
  });

  it('returns an empty array when the given prefix is not found', () => {
    expect(input.getPrefix('dog')).toEqual([]);
  });

  it('returns a sorted array of words when sort is set to true', () => {
    expect(input.getPrefix('aal')).toEqual(['aal', 'aalii']);
  });

  it('returns an unsorted array of words when sort is set to false', () => {
    expect(input.getPrefix('aal', false)).toEqual(['aalii', 'aal']);
  });
});

test('Counting prefixes', () => {
  expect(() => input.countPrefix()).toThrow();
  expect(input.countPrefix('a')).toEqual(5);
  expect(input.countPrefix('ba')).toEqual(2);
  expect(input.countPrefix('dog')).toEqual(0);
});
