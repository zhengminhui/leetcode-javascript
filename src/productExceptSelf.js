/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 * Seperately calculate the multiplication value of left/right of each number in this array.
 * Since we cannot use division, so we can use multiplication twice. First time we can get 
 * the multiplication value (except itself) for each number from left to right. Then we do 
 * it reversedly. Technically we can get two arrays and multiplicate these two arrays we 
 * can get the answer. But during coding, we do not store the second array, treat it as a 
 * interval value, and just multiplicate with former array, we can directly get the final answer. 
 * Time O(n) Space O(1)
 */
var productExceptSelf = function(nums) {
    // [1,2,3,4] -->[1,1,2,6]
    //          -->[24,12,4,1]-->[24,12,8,6]
    var left = 1,
        right = 1,
        ans = [],
        len = nums.length;
    ans[0] = left;
    // itertae from left to right, calculate the multiplicate value and each time update left.
    for (var i = 1; i < len; i++) {
        ans[i] = left * nums[i - 1];
        left *= nums[i - 1];
    }
    // same as before, but iterate from right to left. After multiplicate with former array, update right.
    for (i = len - 1; i >= 0; i--) {
        ans[i] = right * ans[i];
        right *= nums[i];
    }
    return ans;
};
