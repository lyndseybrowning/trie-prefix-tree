import utils from './utils';

export default function checkPrefix(prefixNode, prefix) {
  const input = prefix.toLowerCase().split('');
  const prefixFound = input.every((letter, index) => {
    if(!prefixNode.get(letter)) {
      return false;
    }
    return prefixNode = prefixNode.get(letter);
  });

  return {
    prefixFound,
    prefixNode,
  };
};
