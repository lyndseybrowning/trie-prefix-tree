import trie from '../src/index';

test('Removing a word from the trie', () => {
  const input = ['dog', 'dogs', 'plane'];
  const actual = trie(input);
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
  expect(actual.removeWord('plane').dump()).toEqual(expected);
  expect(actual.removeWord('nonword').dump()).toEqual(actual.dump());
});
