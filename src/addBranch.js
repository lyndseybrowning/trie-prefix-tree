import append from './append';
import utils from './utils';

export default function addBranch(branches, branch) {
  if(typeof branch !== 'string' || branch === '') {
    throw('branch must be a string');
  }

  const tree = utils.objectCopy(branches);
  const input = branch.toLowerCase().split('');
  const output = input.reduce(append, tree);

  return tree;
};
