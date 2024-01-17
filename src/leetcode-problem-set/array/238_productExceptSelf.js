/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 * Separately calculate the multiplication value of left/right of each number in this array.
 * Since we cannot use division, so we can use multiplication twice. First time we can get
 * the multiplication value (except itself) for each number from left to right. Then we do
 * it reversely. Technically we can get two arrays and multiplicate these two arrays we
 * can get the answer. But during coding, we do not store the second array, treat it as a
 * interval value, and just multiplicate with former array, we can directly get the final answer.
 * Time O(n) Space O(1)
 */
var productExceptSelf = function (nums) {
  const len = nums.length;
  const left = new Array(len).fill(1);
  const right = new Array(len).fill(1);
  const res = [];
  // 先计算当前数左边的乘积，从第二个数开始计算，第一个数左边没有，left[0] 是 1
  // 再即算当前数右边的乘积，同理，从倒数第二个数开始算，right[len - 1] 是 1
  // 最后两数组相乘得到所有数的乘积。
  for (let i = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }
  for (let j = len - 1 - 1; j >= 0; j--) {
    right[j] = nums[j + 1] * right[j + 1];
  }
  for (let k = 0; k < len; k++) {
    res[k] = left[k] * right[k];
  }

  return res;
};
