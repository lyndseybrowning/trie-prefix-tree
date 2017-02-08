export default function trie(input) {
  if(!Array.isArray(input)) {
    return new Error(`Expected parameter Array, received ${typeof input}`);
  }
};
