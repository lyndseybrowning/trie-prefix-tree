import trie from '../src/index';

describe('Retrieving a full list of words in the trie', () => {
  const input = ['one', 'two', 'three'];
  const actual = trie(input).getWords();
  const expected = input.sort();

  it('retrieves the full list of words in the trie sorted alphabetically', () => {
    expect(actual).toEqual(expected);
  });
});
