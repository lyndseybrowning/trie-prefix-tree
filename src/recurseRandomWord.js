import config from './config';

export default function recurseRandomWord(node, prefix) {
  const word = prefix;

  const branches = Object.keys(node);
  const branch = branches[Math.floor(Math.random() * branches.length)];
  if(branch === config.END_WORD) {
    return word;
  }
  return recurseRandomWord(node[branch], prefix + branch);
};
