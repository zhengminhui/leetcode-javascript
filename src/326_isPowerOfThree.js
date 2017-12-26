/**
 * @param {number} n
 * @return {boolean}
 * 3^19 is the largest number which is power of 3,
 * 3^20 is bigger than int  
 */
var isPowerOfThree = function (n) {
  return n > 0 && 3 ** 19 % n === 0;
};
