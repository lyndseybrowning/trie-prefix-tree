export default function append(branch, item, index, array) {
  branch[item] = branch[item] || {};
  branch = branch[item];

  if(array.lastIndexOf(item) === array.length - 1) {
    branch.$ = 1;
  }

  return branch;
};
