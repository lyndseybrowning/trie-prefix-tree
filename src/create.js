import append from './append';

export default function create(input) {
  if(!Array.isArray(input)) {
    throw(`Expected parameter Array, received ${typeof input}`);
  }

  const trie = input.reduce((accumulator, item) => {
    item
      .toLowerCase()
      .split('')
      .reduce(append, accumulator);

    return accumulator;
  }, {});

  return trie;
};
