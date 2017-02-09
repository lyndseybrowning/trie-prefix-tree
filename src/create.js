export default function create(input) {
  if(!Array.isArray(input)) {
    throw(`Expected parameter Array, received ${typeof input}`);
  }

  const addBranch = (branch, item, index, array) => {
    branch[item] = branch[item] || {};
    branch = branch[item];

    if(array.lastIndexOf(item) === array.length - 1) {
      branch.$ = 1;
    }

    return branch;
  };

  const trie = input.reduce((accumulator, item) => {
    item
      .toLowerCase()
      .split('')
      .reduce(addBranch, accumulator);

    return accumulator;
  }, {});

  return trie;
};
