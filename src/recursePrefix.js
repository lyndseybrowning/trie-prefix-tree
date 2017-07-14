import config from './config';

// sort items as they're being found
// to prevent slow .sort() in NodeJs
const pushInOrder = function(word, prefixes) {
  let i = 0;

  while(i < prefixes.length) {
    if(word < prefixes[i]) {
      break;
    }
    i += 1;
  }

  prefixes.splice(i, 0, word);

  return prefixes;
};

export default function recursePrefix(node, prefix, sorted, prefixes = []) {
  let word = prefix;

  for(const branch in node) {
    if(branch === config.END_WORD) {
      if(sorted) {
        pushInOrder(word, prefixes);
      } else {
        prefixes.push(word);
      }
      word = '';
    }
    recursePrefix(node[branch], prefix + branch, sorted, prefixes);
  }

  return prefixes;
};
