/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Time Complexity O(n)
 */
var moveZeroes = function(nums) {
    var len = nums.length;
    for (var i = 0; i < len; ++i) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            --i;
            --len;
        }
    }
};

var li = [0,1,2,0,12,0]
moveZeroes(li)
console.log(li)