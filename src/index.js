import create from './create';

export default function trie(input) {
  if(!Array.isArray(input)) {
    throw(`Expected parameter Array, received ${typeof input}`);
  }

  const data = create([...input]);

  return {
    get() {
      return data;
    },

    addNode() {},
    deleteNode() {},
    prefixSearch() {},
    countPrefix() {},
    contains() {}
  };
};
