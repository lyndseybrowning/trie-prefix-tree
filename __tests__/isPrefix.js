import trie from '../src/index';

describe('Prefix checking', () => {
  const input = trie(['dog', 'cat', 'meow']);
  const data = JSON.parse(input.dump());

  it('throws an error when the prefix is undefined', () => {
    expect(() => input.isPrefix()).toThrow();
  });

  it('converts the given prefix to lowercase', () => {
    expect(input.isPrefix('D')).toEqual(true);
  });

  it('returns false for an invalid prefix', () => {
    expect(input.isPrefix('med')).toEqual(false);
  });

  it('returns true for a valid prefix', () => {
    expect(input.isPrefix('do')).toEqual(true);
  });
});
