/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Time Complexity O(n)
 */
var moveZeroes = function (nums) {
  var head = 0;
  var tail = nums.length - 1;
  while (head < tail) {
    if (nums[head] === 0) {
      // no need to save temp variable, just push 0 to the end
      nums.splice(head, 1);
      nums.push(0);
      tail--;
      head--;
    }
    head++;
  }
};
