import config from './config';

export default function append(trie, letter, index, array) {
  trie[letter] = trie[letter] || {};
  trie = trie[letter];

  if(index === array.length - 1) {
    trie[config.END_WORD] = 1;
  }

  return trie;
};
