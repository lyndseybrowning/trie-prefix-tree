export default function append(trie, letter, index, array) {
  trie[letter] = trie[letter] || {};
  trie = trie[letter];

  if(index === array.length - 1) {
    trie.$ = 1;
  }

  return trie;
};
