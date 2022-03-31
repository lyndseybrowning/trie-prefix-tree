import config from './config';

export default function permutations(letters, trie, opts = {
  type: 'anagram',
}) {
  if(typeof letters !== 'string') {
    throw(`Permutations expects string letters, received ${typeof letters}`);
  }

  const words = [];

  const permute = (word, node, prefix = '') => {
    if(!(node instanceof Map)) return words.sort();
    const wordIsEmpty = word.length === 0;
    const wordFound = words.includes(prefix);
    const endWordFound = node.get(config.END_WORD) === 1;

    if(wordIsEmpty && endWordFound && !wordFound) {
      words.push(prefix);
    }

    for(let i = 0, len = word.length; i < len; i++) {
      const letter = word[i];

      if(opts.type === 'sub-anagram') {
        if(endWordFound && !words.includes(prefix)) {
          words.push(prefix);
        }
      }

      if(node.get(letter)) {
        const remaining = word.substring(0, i) + word.substring(i + 1, len);
        permute(remaining, node.get(letter), prefix + letter, words);
      }
    }

    return words.sort();
  };

  return permute(letters, trie);
};
