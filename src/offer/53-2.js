/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // 排序数组中的搜索问题，考虑使用二分查找。
  // 如果乱序则使用异或
  let i = 0;
  let j = nums.length - 1;
  let mid;
  while (i <= j) {
    mid = Math.floor((j + i) / 2);
    // 如果相等，说明前半段是完整的，检查后半段；反之亦然
    if (nums[mid] === mid) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }
  return i;
};

// 异或
// var missingNumber = function (nums) {
//   var res = nums.length;
//   for (var i = 0; i < nums.length; i++) {
//     res ^= i;
//     res ^= nums[i];
//     console.log(i, nums[i], res);
//   }
//   return res;
// };

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 9];
// const nums = [0, 1, 3];
// const nums = [0];
console.log(missingNumber(nums));
