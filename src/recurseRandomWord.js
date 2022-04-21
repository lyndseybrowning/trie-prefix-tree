import config from './config';

export default function recurseRandomWord(node, prefix) {
  const word = prefix;
  const branches = [...node.keys()];
  const branch = branches[Math.floor(Math.random() * branches.length)];

  if(branch === config.END_WORD || !node.get(branch)) {
    return word;
  }
  return recurseRandomWord(node.get(branch), prefix + branch);
};
