/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let pre = nums[0];
  let i = 1;
  while (i < nums.length) {
    const cur = nums[i];
    if (cur === pre) {
      // 删掉后面所有的 pre；
      while (nums[i + 1] === cur) {
        // 原地删除，始终检查 i+1，位置不用变。
        nums.splice(i + 1, 1);
      }
    } else {
      pre = cur;
    }
    i++;
  }
  return nums.length;
};
