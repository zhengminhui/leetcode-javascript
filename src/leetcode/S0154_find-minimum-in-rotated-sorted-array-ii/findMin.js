/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] > nums[high]) {
      low = mid + 1;
    } else if (nums[mid] < nums[high]) {
      high = mid;
    } else {
      high -= 1;
    }
  }
  return nums[low];
};
