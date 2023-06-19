/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
// 暴力解法会超时, 无论是从小到大，还是从大到小计算。
// 一开始好奇为什么是二分法。
// 排序后，找满足 p 大于 suc / s 的最小值（左端点）。
var successfulPairs = function (spells, potions, success) {
  const res = [];
  potions = potions.sort((a, b) => a - b);
  const len = potions.length;
  for (let i = 0; i < spells.length; i++) {
    const left = bs(potions, spells[i], success);
    res.push(len - left);
  }
  return res;
};

// return left, which is the smallest one that satisfied.
function bs(arr, spell, suc) {
  let left = 0;
  // 从 界外开始，包含右边界。
  let right = arr.length;
  while (left < right) {
    // 用位运算，不用调用 floor
    // 这里的括号自动补错了位置，花了点时间。
    const mid = left + ((right - left) >> 2);
    if (arr[mid] * spell < suc) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

const spells = [5, 1, 3];
const potions = [1, 2, 3, 4, 5];
const success = 7;
console.log(successfulPairs(spells, potions, success));
