/**
 * @param {number[]} nums
 * @return {number}
 * Time O(n) Space O(1)
 * X^a^a is X, so find the length of nums, save as res, use res to XOR with i and nums[i], if i and nums[i] are equal, the res won't change. So if any number from 1...n XOR with itself except the missing number, the result will be the missing number. 
 */
var missingNumber = function(nums) {
    var res = nums.length;
    for (var i=0;i< nums.length;i++){
        res ^= i;
        res ^= nums[i];
    }
    return res;
};