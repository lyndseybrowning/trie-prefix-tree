import trie from '../src/index';

describe('Finding valid sub-anagrams from the Trie given a set of letters', () => {
  const input = ['acts', 'arc', 'acts', 'arcs', 'car', 'care', 'scar', 'scared'];
  const data = trie(input);

  it('throws an error when no letters are passed', () => {
    expect(() => data.getSubAnagrams()).toThrow();
  });

  it('expects at least two letters', () => {
    expect(() => data.getSubAnagrams('t')).toThrow();
  });

  it('retrieves a sorted list of all valid sub-anagrams that exist in the Trie', () => {
    const actual = data.getSubAnagrams('cares');
    const expected = ['arc', 'arcs', 'car', 'care', 'scar'];

    expect(actual).toEqual(expected);
  });

  it('returns an empty array when no permutations are found', () => {
    const actual = data.getSubAnagrams('abcd');
    const expected = [];

    expect(actual).toEqual(expected);
  });
});
