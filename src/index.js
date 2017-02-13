import create from './create';
import append from './append';
import checkPrefix from './checkPrefix';
import recursePrefix from './recursePrefix';

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
      return JSON.stringify(trie, null, spacer);
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
        delete node.$;
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
    getWords() {},

    /**
    * Get a list of words that can be made from the given letters
    * @returns Array
    */
    solveWords() {},


    /**
    * Check the existence of a word in the trie
    * @returns Boolean
    */
    hasWord() {}
  };
};
