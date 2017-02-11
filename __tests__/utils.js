import utils from '../src/utils';

describe('Utility methods', () => {

  describe('copying objects', () => {
    const input = {
      a: {
        b: {
          c: { }
        }
      }
    };
    let copied = utils.objectCopy(input);

    it('deep copies an object', () => {
      expect(copied).toEqual(input);
      expect(utils.objectCopy()).toEqual({});
    });

    test('mutated copy is different to the original input', () => {
      copied.x = 1;
      expect(copied).not.toEqual(input);
    });
  });

  test('stringifying objects', () => {
    expect(utils.stringify({})).toEqual('{}');
    expect(utils.stringify()).toEqual('');
    expect(utils.stringify(123)).toEqual('123');
  });
});
