import addBranch from '../src/addBranch';

describe('Adding to the Trie', () => {
  const input = {
    d: {
      o: {
        g: {
          $: 1
        }
      }
    }
  };

  it('expects a string as the second argument', () => {
    expect(() => addBranch(input)).toThrow();
  });

  it('adds a new branch and returns the tree without mutating the original Trie', () => {
    const actual = addBranch(input, 'dogs');

    expect(input).not.toEqual(actual);
    expect(actual).toEqual({
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
  });
});
