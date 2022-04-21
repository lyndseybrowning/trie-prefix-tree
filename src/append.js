import config from './config';

export default function append(trie, letter, index, array) {
  const isEndWordLetter = letter === config.END_WORD;
  const isLastLetter = index === array.length - 1;

  if(isEndWordLetter && !isLastLetter) {
    trie.set(config.END_WORD, 1);
    trie.set(config.END_WORD_REPLACER, new Map());
    trie = trie.get(config.END_WORD_REPLACER);
  } else {
    trie.set(letter, trie.get(letter) || new Map());
    trie = trie.get(letter);
  }

  if(isLastLetter) {
    trie.set(config.END_WORD, 1);
  }

  return trie;
}
