import append from './append';
import utils from './utils';

export default function addBranch(tree, branch) {
  if(typeof branch !== 'string' || branch === '') {
    throw('branch must be a string');
  }

  const input = branch.toLowerCase().split('');
  const output = input.reduce(append, tree);

  return tree;
};
