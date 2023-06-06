/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// 时间 O(n)
// 两种基础情况：1. flowerbed[i] 有花，向前两格。
// 2，flowerbed[i]没花，分两个 case，
// 2-1， flowerbed[i+1] 也没花，可以放心种。
// 2-2. i 是最后一个位置了，也可以放心中。因为前面过来的情况，都考虑了 2-1，都是合法的。
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) {
      i++;
    } else if (
      flowerbed[i] === 0 &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      n--;
      i++;
    }
    if (n === 0) {
      return true;
    }
  }
  return n <= 0;
};
