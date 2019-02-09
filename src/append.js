import config from './config';

export default function append(trie, letter, index, array) {
  const isEndWordLetter = letter === config.END_WORD;
  const isLastLetter = index === array.length - 1;

  if(isEndWordLetter && !isLastLetter) {
    trie[config.END_WORD] = 1;
    trie[config.END_WORD_REPLACER] = {};
    trie = trie[config.END_WORD_REPLACER];
  } else {
    trie[letter] = trie[letter] || {};
    trie = trie[letter];
  }

  if(isLastLetter) {
    trie[config.END_WORD] = 1;
  }

  return trie;
}
