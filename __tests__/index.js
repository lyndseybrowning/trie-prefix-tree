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

    expect(data.dump).toBeDefined();
    expect(data.addWord).toBeDefined();
    expect(data.removeWord).toBeDefined();
    expect(data.isPrefix).toBeDefined();
    expect(data.countPrefix).toBeDefined();
    expect(data.getPrefix).toBeDefined();
    expect(data.getWords).toBeDefined();
    expect(data.hasWord).toBeDefined();
    expect(data.getAnagrams).toBeDefined();
    expect(data.getSubAnagrams).toBeDefined();
  });
});

describe('Retrieving the Trie', () => {
  it('returns a string representation of the trie object structure', () => {
    const input = ['dog', 'dogs', 'donut'];
    const actual = trie(input).dump();
    const expected = JSON.stringify({
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
    });

    expect(actual).toEqual(expected);
  });
});

describe('Retrieving the RAW Trie tree', () => {
  it('returns the raw trie object structure', () => {
    const input = ['dog', 'dogs', 'donut'];
    const actual = JSON.stringify(trie(input).tree());
    const expected = JSON.stringify({
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
    });

    expect(actual).toEqual(expected);
  });
});
