import trie from '../src/index';
import config from '../src/config';

test('Adding a word to the trie', () => {
  const input = ['dog'];
  const actual = trie(input).addWord('cat');
  const expected = JSON.stringify({
    d: {
      o: {
        g: {
          $: 1,
        },
      },
    },
    c: {
      a: {
        t: {
          $: 1,
        },
      },
    },
  });

  expect(() => trie(input).addWord()).toThrow();
  expect(actual.dump()).toEqual(expected);
});

test('Words that contain the END_WORD character can be added to the trie', () => {
  const dictionary = trie([]);
  const testWord = `test${config.END_WORD}word`;
  const expectedWords = ['test', testWord];

  dictionary.addWord('test');
  dictionary.addWord(testWord);

  expect(dictionary.getWords()).toEqual(expectedWords);
  expect(dictionary.getPrefix('te')).toEqual(expectedWords);
});
