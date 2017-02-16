import utils from './utils';

export default function contains(node, prefix) {
  const input = prefix.toLowerCase().split('');
  const found = input.every((letter, index) => {
    if(!node[letter]) {
      return false;
    }
    return node = node[letter];
  });

  return {
    found,
    node,
  };
};
