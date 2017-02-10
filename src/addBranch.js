import append from './append';

export default function addBranch(tree, branch) {
  if(typeof branch !== 'string' || branch === '') {
    throw('branch must be a string');
  }

  const trie = { ...tree };
  const added = branch
    .toLowerCase()
    .split('')
    .reduce(append, trie);

  return added;
};
