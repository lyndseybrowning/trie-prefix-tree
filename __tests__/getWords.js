import trie from '../src/index';

describe('Retrieving a full list of words in the trie', () => {
  const input = ['one', 'two', 'three'];
  const actual = trie(input).getWords();
  const expected = input.sort();

  it('retrieves the full list of words in the trie sorted alphabetically', () => {
    expect(actual).toEqual(expected);
  });

  test('adding new words', () => {
    const input = ['one',  'two', 'three'];
    const data = trie(input).addWord('four').removeWord('one');
    const actual = data.getWords();
    const expected = ['four', 'three', 'two'];

    expect(actual).toEqual(expected);
  });
});
