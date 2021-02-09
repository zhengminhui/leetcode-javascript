/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  const dp = nums.slice();
  for (let i = 1; i < nums.length; i++) {
    dp[i] = nums[i] + dp[i - 1];
  }
  this.dp = dp;
};

/**
* @param {number} i
* @param {number} j
* @return {number}
*/
NumArray.prototype.sumRange = function (i, j) {
  const { dp } = this;
  return i === 0 ? dp[j] : dp[j] - dp[i - 1];
};

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(i,j)
*/
