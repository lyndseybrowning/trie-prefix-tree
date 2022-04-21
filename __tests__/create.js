import create from '../src/create';
import utils from '../src/utils';

describe('Creating the Trie', () => {
  it('throws when the first argument is not an array', () => {
    const input = '';
    const expected = `Expected parameter Array, received ${typeof input}`;

    try {
      create(input);
    } catch(error) {
      expect(error).toEqual(expected);
    }
  });

  it('returns a Trie object structure converted to lowercase', () => {
    const input = ['Dog'];
    const data = utils.stringify(create(input), 0);
    const expected = JSON.stringify({
      d: {
        o: {
          g: {
            $: 1
          }
        }
      }
    });

    expect(data).toEqual(expected);
  });

  it('returns a Trie object structure with case-sensitive', () => {
    const input = ['Dog'];
    const data = create(input, true);
    const expected = {
      D: {
        o: {
          g: {
            $: 1
          }
        }
      }
    };

    expect(data).toEqual(expected);
  });
});
