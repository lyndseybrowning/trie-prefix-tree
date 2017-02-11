import create from './create';
import addBranch from './addBranch';

export default function trie(input) {
  if(!Array.isArray(input)) {
    throw(`Expected parameter Array, received ${typeof input}`);
  }

  const data = create([...input]);

  return {
    get() {
      return data;
    },

    addBranch: addBranch.bind(null, data),

    deleteBranch() {},
    prefixSearch() {},
    countPrefix() {},
    contains() {},
  };
};
