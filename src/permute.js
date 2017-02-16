import checkPrefix from './checkPrefix';
import config from './config';

export default (letters, trie) => {
  if(typeof letters !== 'string') {
    throw('Expected string source');
  }

  const words = [];
  const permute = (source, prefix = '') => {
    source = source.toLowerCase();

    const word = prefix + source;
    const letters = source.split('');
    const isWord = checkPrefix(trie, word).node[config.END_WORD] === 1;

    if(isWord && !words.includes(word)) {
      words.push(word);
    }

    letters.forEach((letter, index) => {
      const remainder = source.substring(0, index) + source.substring(index + 1);
      permute(remainder, prefix + letter, words);
    });

    return words.sort();
  };

  return permute(letters);
};
