/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let lastPos = nums.length - 1;
  // 从倒数第二个数往前找
  for (let i = nums.length - 1 - 1; i >= 0; i--) {
    // 如果当前的值（表示可以跳的长度）+ 当前的序数，大于右边的序数。
    // 表明可以跳到下一步；这时，可以用当前的序数，更新lastPos
    // 然后继续往左，重复。
    if (i + nums[i] >= lastPos) {
      lastPos = i;
    }
  }
  return lastPos === 0;
};
