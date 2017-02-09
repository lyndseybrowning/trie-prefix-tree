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
