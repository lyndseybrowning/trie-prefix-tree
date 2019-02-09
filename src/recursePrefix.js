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
    let currentLetter = branch;
    if(branch === config.END_WORD && typeof node[branch] === 'number') {
      if(sorted) {
        pushInOrder(word, prefixes);
      } else {
        prefixes.push(word);
      }
      word = '';
    } else if(branch === config.END_WORD_REPLACER) {
      currentLetter = config.END_WORD;
    }
    recursePrefix(node[branch], prefix + currentLetter, sorted, prefixes);
  }

  return prefixes;
}
