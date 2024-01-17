/**
 * @param {number[]} nums
 * @return {number}
 */
// 时间 O(n)，如果前面和后面一样，删掉前者。
var removeDuplicates = function (nums) {
  let i = 0;
  while (i < nums.length - 1) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
    i++;
  }
  return nums.length;
};
