import trie from '../src/index';

describe('Retrieving a full list of words in the trie', () => {
  const input = ['one', 'two', 'three'];
  const actual = trie(input).getWords();
  const expected = input.sort();

  it('errors when the sort parameter is not boolean', () => {
    expect(() => {
      trie(input).getWords('');
    }).toThrow();
  });

  it('returns a sorted array of all words found by default', () => {
    expect(actual).toEqual(expected);
  });

  it('returns an unsorted array of all words found when sort is false', () => {
    expect(trie(input).getWords(false)).toEqual(input);
  });

  test('adding and removing words', () => {
    const input = ['one',  'two', 'three'];
    const data = trie(input).addWord('four').removeWord('one');
    const actual = data.getWords();
    const expected = ['four', 'three', 'two'];

    expect(actual).toEqual(expected);
  });
});
