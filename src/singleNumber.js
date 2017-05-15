/**
 * @param {number[]} nums
 * @return {number}
 * For every number in list, do xor with each other. And the final answer is the unique one.
 * Since a^a itself will equal to 0.
 */
var singleNumber = function(nums) {
    var ans = 0;
    for (var i = 0; i < nums.length; i++) {
        ans ^= nums[i];
    }
    return ans;
};

console.log(singleNumber([1, 1, 2]))
