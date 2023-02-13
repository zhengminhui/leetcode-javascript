/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];
  const path = [];

  function backtracking(startIndex) {
    res.push(Array.from(path));

    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(i + 1);
      path.pop();
    }
  }
  backtracking(0);
  return res;
};

console.log(subsets([1, 2, 3]));
