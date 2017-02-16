export default function recursePrefix(node, prefix, prefixes = []) {
  let word = prefix;

  for(const branch in node) {
    if(branch === '$') {
      prefixes.push(word);
      word = '';
    }
    recursePrefix(node[branch], prefix + branch, prefixes);
  }

  return prefixes.sort();
};
