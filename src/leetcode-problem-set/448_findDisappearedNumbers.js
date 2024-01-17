/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const res = new Array(nums.length).fill(false);
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    res[cur - 1] = cur;
  }
  for (let i = 0; i < res.length; i++) {
    if (!res[i]) {
      res[i] = i + 1;
    } else {
      res[i] = false;
    }
  }
  return res.filter((i) => i);
};
