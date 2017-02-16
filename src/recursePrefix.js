import config from './config';

export default function recursePrefix(node, prefix, prefixes = []) {
  let word = prefix;

  for(const branch in node) {
    if(branch === config.END_WORD) {
      prefixes.push(word);
      word = '';
    }
    recursePrefix(node[branch], prefix + branch, prefixes);
  }

  return prefixes.sort();
};
