import utils from './utils';

export default function checkPrefix(prefixNode, prefix) {
  const input = prefix.toLowerCase().split('');
  const prefixFound = input.every((letter, index) => {
    if(!prefixNode[letter]) {
      return false;
    }
    return prefixNode = prefixNode[letter];
  });

  return {
    prefixFound,
    prefixNode,
  };
};
