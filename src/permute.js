import trie from './index';
import config from './config';

export default (source, dictionary, subAnagramSearch = false) => {
  if(typeof source !== 'string') {
    throw('Expected string source');
  }

  const data = trie(dictionary);
  const words = [];

  const permute = (source, prefix = '') => {
    source = source.toLowerCase();

    const letters = source.split('');
    const word = prefix + source;
    const wordType = subAnagramSearch ? prefix : word;
    const isValid = data.hasWord(wordType);

    if(isValid && !words.includes(wordType)) {
      words.push(wordType);
    }

    letters.forEach((letter, index) => {
      const remainder = source.substring(0, index) + source.substring(index + 1);
      permute(remainder, prefix + letter);
    });

    return words.sort();
  };

  return permute(source);
};
