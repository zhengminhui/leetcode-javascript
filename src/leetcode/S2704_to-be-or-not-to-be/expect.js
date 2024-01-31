/**
 * @param {string} val
 * @return {Object}
 */
// 花了点时间，一开始想简单了，直接返回一个function 作为闭包
// 因为需要链式调用，想直接返回 this
// 后面想到，返回一个 object ，里面 k-v 则是对应的调用方法。
var expect = function (val) {
  this.toBe = function (v) {
    if (v !== val) throw Error('Not Equal');
    return true;
  };

  this.notToBe = function (v) {
    if (v === val) throw Error('Equal');
    return true;
  };

  function comparator(v) {
    this.val = v;
    return {
      toBe: (v) => this.toBe(v),
      notToBe: (v) => this.notToBe(v),
    };
  }
  return comparator(val);
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
