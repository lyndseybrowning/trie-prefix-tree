import trie from '../src/index';

describe('validating a word exists', () => {
  const input = ['dog', 'cat', 'lion', 'tiger', 'carse', 'car', 'scar', 'cute DOG'];
  const data = trie(input);

  it('throws an error when a word is not passed', () => {
    expect(() => data.hasWord()).toThrow();
  });

  it('returns true for a valid word found', () => {
    expect(data.hasWord('dog')).toEqual(true);
  });

  it('returns true for a valid word found', () => {
    expect(data.hasWord('cute dog')).toEqual(true);
  });

  it('converts the word to lowercase', () => {
    expect(data.hasWord('DOG')).toEqual(true);
  });

  it('returns false for an invalid word', () => {
    expect(data.hasWord('elephant')).toEqual(false);
  });
});

describe('validating a word exists with case-sensitive', () => {
  const input = ['dog', 'cat', 'lion', 'tiger', 'carse', 'car', 'scar', 'cute DOG'];
  const data = trie(input, true);

  it('throws an error when a word is not passed', () => {
    expect(() => data.hasWord()).toThrow();
  });

  it('returns true for a valid word found', () => {
    expect(data.hasWord('dog')).toEqual(true);
  });

  it('returns true for a valid word found', () => {
    expect(data.hasWord('cute DOG')).toEqual(true);
  });

  it('returns false for a invalid word', () => {
    expect(data.hasWord('cute dog')).toEqual(false);
  });

  it('returns false for an invalid word', () => {
    expect(data.hasWord('elephant')).toEqual(false);
  });
});
