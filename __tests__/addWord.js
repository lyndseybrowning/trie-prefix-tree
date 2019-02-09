import trie from '../src/index';

test('Adding a word to the trie', () => {
  const input = ['dog'];
  const actual = trie(input).addWord('cat');
  const expected = JSON.stringify({
    d: {
      o: {
        g: {
          $: 1
        }
      }
    },
    c: {
      a: {
        t: {
          $: 1
        }
      }
    }
  });

  expect(() => trie(input).addWord()).toThrow();
  expect(actual.dump()).toEqual(expected);
});
