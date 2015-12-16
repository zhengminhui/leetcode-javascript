/**
 * https://leetcode.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * Time O(n)
 */
var removeElement = function(nums, val) {
    for (var i = 0, len = nums.length; i < len; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};
console.log(removeElement([1, 1, 1, 2, 3, 3], 1));
