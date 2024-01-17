/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 双指针，头部找 0，遇则删，尾部插入新 0。
// 故能保持其他数字之顺序。
// Time O(n)
var moveZeroes = function (nums) {
  let i = 0;
  let end = nums.length - 1;
  while (i < end) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      end--;
    } else {
      i++;
    }
  }
};
