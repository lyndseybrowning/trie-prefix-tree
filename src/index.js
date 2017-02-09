export default function trie(input) {
  if(!Array.isArray(input)) {
    throw(`Expected parameter Array, received ${typeof input}`);
  }

  const data = [...input];

  return {
    get() {},
    addNode() {},
    deleteNode() {},
    prefixSearch() {},
    countPrefix() {},
    contains() {}
  };
};
