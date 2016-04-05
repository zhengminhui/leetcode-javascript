/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var i = 1, //iterate the array
        j = 0; // max index of different numbers
    if (nums.length < 2) return nums.length;
    for (; i < nums.length; i++) {
        // if two numbers are not same, then increase j and safe new number at index j; else just increase i and move right.
        if (nums[i] !== nums[i - 1]) {
            j++;
            nums[j] = nums[i];
        }
    }
    // as j is index, so return j+1 as lenght
    return j + 1;
};