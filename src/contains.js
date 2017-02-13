import utils from './utils';

export default function contains(obj = {}, prefix) {
  let current = utils.objectCopy(obj);

  const input = prefix.toLowerCase().split('');
  const found = input.every((letter, index) => {
    if(!current[letter]) {
      return false;
    }
    return current = current[letter];
  });

  return found;
};
