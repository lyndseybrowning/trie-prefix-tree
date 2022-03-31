import append from './append';

export default function create(input, caseSensitive) {
  if(!Array.isArray(input)) {
    throw(`Expected parameter Array, received ${typeof input}`);
  }

  const trie = input.reduce((accumulator, item) => {
    caseSensitive
    ?
    item
      .split('')
      .reduce(append, accumulator)
    :
    item
      .toLowerCase()
      .split('')
      .reduce(append, accumulator);

    return accumulator;
  }, {});

  return trie;
};
