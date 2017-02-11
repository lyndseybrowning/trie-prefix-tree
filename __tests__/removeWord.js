import trie from '../src/index';

test('Removing a word from the trie', () => {
  const input = ['dog', 'dogs', 'plane'];
  const actual = trie(input).removeWord('plane');
  const expected = JSON.stringify({
    d: {
      o: {
        g: {
          $: 1,
          s: {
            $: 1
          }
        }
      }
    }
  });

  expect(() => trie(input).removeWord()).toThrow();
  expect(actual.dump()).toEqual(expected);
});
