/**
 * @param {number[]} nums
 * @return {number}
 * For every number in list, do xor with each other. And the final answer is the unique one.
 * Since a^a itself will equal to 0.
 */
var singleNumber = function(nums) {
  var res = 0;
  for (var i = 0; i < nums.length; i++) {
    res ^= nums[i];
  }
  return res;
};
