export default {
  objectCopy(obj) {
    if(typeof obj === 'undefined') {
      return {};
    }
    return JSON.parse(JSON.stringify(obj));
  },

  mapToObj(map) {
    const obj = {};
    for(const [k, v] of map) {
      obj[k] = (v instanceof Map) ? this.mapToObj(v) : v;
    }
    return obj;
  },

  stringify(obj, spacer = 2) {
    if(typeof obj === 'undefined') {
      return '';
    }
    return (obj instanceof Map)
          ? JSON.stringify(this.mapToObj(obj), null, spacer)
          : JSON.stringify(obj, null, spacer);
  },
};
