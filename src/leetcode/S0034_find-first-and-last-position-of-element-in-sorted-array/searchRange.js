/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // sorted array, use binary search
  // Time: O(log n)
  let i = 0;
  let j = nums.length - 1;
  let mid;
  let res = [-1, -1];
  console.log(i, j);
  while (i <= j) {
    mid = Math.floor(i + (j - i) / 2);
    console.log(i, j, mid);
    if (nums[mid] < target) {
      i = mid;
      if (nums[i + 1] > target) {
        break;
      }
    } else if (nums[mid] > target) {
      j = mid;
      if (nums[j - 1] < target) {
        break;
      }
    } else if (nums[mid] === target) {
      i = i + 1;
      j = j - 1;
      res = [i, j];
      if (nums[i] === target && nums[j] === target) {
        break;
      }
    }
  }

  return res;
};

module.exports = searchRange;
