import trie from '../src/index';

describe('Trie', () => {
  it('throws an error when the first argument specified is not an array', () => {
    const input = 'string';
    const expected = `Expected parameter Array, received ${typeof input}`;

    try {
      trie(input);
    } catch(error) {
      expect(error).toEqual(expected);
    }
  });

  test('return methods', () => {
    const data = trie(['dog', 'cat']);

    expect(data.get).toBeDefined();
    expect(data.addNode).toBeDefined();
    expect(data.deleteNode).toBeDefined();
    expect(data.prefixSearch).toBeDefined();
    expect(data.countPrefix).toBeDefined();
    expect(data.contains).toBeDefined();
  });
});

describe('Retrieving the Trie', () => {
  it('returns a trie object structure', () => {
    const input = ['dog', 'dogs', 'donut'];
    const data = trie(input);
    const actual = data.get();
    const expected = {
      d: {
        o: {
          g: {
            $: 1,
            s: {
              $: 1
            }
          },
          n: {
            u: {
              t: {
                $: 1
              }
            }
          }
        }
      }
    };

    expect(actual).toEqual(expected);
  });
});
