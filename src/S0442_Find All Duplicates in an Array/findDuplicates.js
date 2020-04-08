/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 因为输入全是正数，所以可以通过正负也可以充当 boolean 值来判断是否重复过
// 1 <= nums[i] <= nums.length
var findDuplicates = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    // 准备将该数字在他的 index 处标记,
    // 比如 4 在 3，3 在 2，n 放在 n-1 处，标记方式是取反
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      res.push(Math.abs(nums[i]));
    }
    nums[index] = -nums[index];
  }
  return res;
};

findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
