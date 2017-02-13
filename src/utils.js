export default {
  objectCopy(obj) {
    if(typeof obj === 'undefined') {
      return {};
    }
    return JSON.parse(JSON.stringify(obj));
  },

  stringify(obj, spacer = 2) {
    if(typeof obj === 'undefined') {
      return '';
    }
    return JSON.stringify(obj, null, spacer);
  },
};
