/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  while (m > 0 && n > 0) {
    if (nums1[m - 1] >= nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    }
  }
  // if n still remains, means m is already sorted and
  // should replace m from the begining to n
  while (n > 0) {
    nums1[m + n - 1] = nums2[n - 1];
    n--;
  }
};

// console.log(merge([2, 6, 9], 3, [1, 2], 2));
console.log(merge([1, 2], 2, [2, 6, 9], 3));
