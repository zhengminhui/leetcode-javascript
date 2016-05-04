/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * time O(n) space O(1) in-place
 * method 1 
 * pop up the last one and unshift to the front
 * 
 * method 2
 * First reverse the whole array,1234567->7654321
 * then reverse the 0~k-1 part          ->5674321
 * Finally reverse the k~end            ->5671234
 */
var rotate = function(nums, k) {
  if (k > nums.length) {
    k = k % nums.length;
  }
  // // method 1
  // while (k > 0){
  //     nums.unshift(nums.pop());
  //     k--;
  // }

  // method 2
  myReverse(nums, 0, nums.length - 1);
  myReverse(nums, 0, k - 1);
  myReverse(nums, k, nums.length - 1);

};

var myReverse = function(nums, start, end) {
  while (start < end) {
    var tmp = nums[start];
    nums[start] = nums[end];
    nums[end] = tmp;
    start++;
    end--;
  }
  return nums;
};
