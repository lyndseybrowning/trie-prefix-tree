import create from './create';
import append from './append';
import checkPrefix from './checkPrefix';
import recursePrefix from './recursePrefix';
import utils from './utils';
import config from './config';

export default function(input) {
  if(!Array.isArray(input)) {
    throw(`Expected parameter Array, received ${typeof input}`);
  }

  const trie = create([...input]);

  return {
    /**
     * Get a string representation of the trie
    */
    dump(spacer = 0) {
      return utils.stringify(trie, spacer);
    },

    /**
     * Add a new word to the trie
     */
    addWord(word) {
      if(typeof word !== 'string' || word === '') {
        throw(`Expected parameter string, received ${typeof word}`);
      }

      const reducer = (...params) => {
        return append(...params);
      };

      const input = word.toLowerCase().split('');
      input.reduce(reducer, trie);

      return this;
    },

    /**
     * Remove an existing word from the trie
     */
    removeWord(word) {
      if(typeof word !== 'string' || word === '') {
        throw(`Expected parameter string, received ${typeof word}`);
      }

      const { found, node } = checkPrefix(trie, word);

      if(found) {
        delete node[config.END_WORD];
      }

      return this;
    },

    /**
     * Check a prefix is valid
     * @returns Boolean
    */
    isPrefix(prefix) {
      if(typeof prefix !== 'string' || prefix === '') {
        throw(`Expected string prefix, received ${typeof prefix}`);
      }

      const { found } = checkPrefix(trie, prefix);

      return found;
    },

    /**
    * Get a list of all words in the trie with the given prefix
    * @returns Array
    */
    getPrefix(strPrefix) {
      if(typeof strPrefix !== 'string' || strPrefix === '') {
        throw(`Expected string prefix, received ${typeof strPrefix}`);
      }

      if(!this.isPrefix(strPrefix)) {
        return [];
      }

      const { node } = checkPrefix(trie, strPrefix);

      return recursePrefix(node, strPrefix);
    },

    /**
    * Count the number of words with the given prefixSearch
    * @returns Number
    */
    countPrefix(strPrefix) {
      const prefixes = this.getPrefix(strPrefix);

      return prefixes.length;
    },

    /**
    * Get all words in the trie
    * @returns Array
    */
    getWords() {
      return recursePrefix(trie, '');
    },

    /**
    * Check the existence of a word in the trie
    * @returns Boolean
    */
    hasWord(word) {
      if(typeof word !== 'string') {
        throw(`Expected string word, received ${typeof word}`);
      }

      const { node } = checkPrefix(trie, word);

      return node[config.END_WORD] === 1;
    },

    /**
    * Get a list of valid anagrams that can be made from the given letters
    * @returns Array
    */
    getAnagrams() {},

    /**
    * Get a list of all sub-anagrams that can be made from the given letters
    * @returns Array
    */
    getSubAnagrams() {},

  };
};
