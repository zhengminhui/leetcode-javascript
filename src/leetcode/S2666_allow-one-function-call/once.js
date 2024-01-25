/**
 * @param {Function} fn
 * @return {Function}
 */
//  注意 triggered 要放在闭包的内层。
var once = function (fn) {
  let triggered = false;
  return function (...args) {
    if (triggered) return undefined;
    triggered = true;
    const res = fn(...args);
    return res;
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
