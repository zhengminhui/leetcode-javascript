/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const diff = target - cur;
    // since it's sorted, use binary search to find the target
    const low = i + 1;
    const high = nums.length - 1;
    if (binarySearch(nums, low, high, diff)) {
      return [cur, diff];
    }
  }

  return res;
};

function binarySearch(nums, low, high, diff) {
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (diff > nums[mid]) {
      low = mid + 1;
    } else if (diff < nums[mid]) {
      high = mid - 1;
    } else {
      return true;
    }
  }
  return false;
}

// const nums = [2, 7, 11, 15];
// const target = 9;
// const nums = [16, 16, 18, 24, 30, 32];
// const target = 48;
// const nums = [14, 15, 16, 22, 53, 60];
// const target = 76;
const nums = [45, 46, 67, 73, 74, 74, 77, 83, 89, 98];
const target = 147;
console.log(twoSum(nums, target));
