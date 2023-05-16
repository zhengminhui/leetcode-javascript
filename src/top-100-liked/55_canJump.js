/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 从倒数第二个数往前找
// 如果当前的值（表示可以跳的长度）+ 当前的index，大于右边的index。
// 表明可以跳到下一步；这时，可以用当前的index，更新ptr
// 然后继续往左，重复。最后检查 ptr 是否能到起始位置。
var canJump = function (nums) {
  let ptr = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= ptr) {
      ptr = i;
    }
  }
  return ptr === 0;
};
