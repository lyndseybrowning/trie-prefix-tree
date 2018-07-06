import trie from '../src/index';

describe('Retrieving a random words in the trie', () => {
  const words = ['cat', 'catfish', 'dog'];
  const t = trie(words);

  it('picks words only with the prefix', () => {
    for(let i = 0; i < 100; i++) {
      const word = t.getRandomWordWithPrefix('cat');
      expect(words).toContain(word);
      expect(word).not.toEqual('dog');
    }
  });

  it('can pick randomly in all of the words', () => {
    const word = t.getRandomWordWithPrefix('');
    expect(words).toContain(word);
  });

  it('doesn\'t return words without the prefix', () => {
    const word = t.getRandomWordWithPrefix('xyz');
    expect(word).toEqual('');
  });

  it('errors when the prefix is not boolean', () => {
    expect(() => t.getRandomWordWithPrefix(123)).toThrow();
  });
});
