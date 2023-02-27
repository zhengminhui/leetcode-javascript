/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums || !nums.length) return -1;

  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor((high - low) / 2);

  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (target < nums[mid]) {
      high = mid - 1;
    } else if (target > nums[mid]) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};
// const nums = [-1, 0, 3, 5, 9, 12];
// const nums = [5];
const nums = [-1, 0, 5];
const target = 0;
console.log(search(nums, target));
