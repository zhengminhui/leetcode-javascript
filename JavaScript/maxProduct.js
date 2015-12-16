/**
 * https://leetcode.com/problems/maximum-product-subarray/
 * @param {number[]} nums
 * @return {number}
 * Time O(n) Space O(1)
 * 
 * Unlike add, max product need to rememeber both max value and min value in case of negtive number.
 * And in case one negative number multiplate another negtive number and become positive, we need to 
 * compare both of them before compare to current number.
 */
var maxProduct = function(nums) {
	var maxPre = nums[0],
		minPre = nums[0],
		maxSoFar = nums[0],
		maxHere, minHere;
	for (var i = 1, len = nums.length; i < len; i++) {
		maxHere = Math.max(Math.max(maxPre * nums[i], minPre * nums[i]), nums[i]);
		minHere = Math.min(Math.min(minPre * nums[i], maxPre * nums[i]), nums[i]);
		maxSoFar = Math.max(maxHere, maxSoFar);
		maxPre = maxHere;
		minPre = minHere;

	}
	return maxSoFar;
};