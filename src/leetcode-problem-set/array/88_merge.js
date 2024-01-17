/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 时间 O(n)，从后往前写入。
var merge = function (nums1, m, nums2, n) {
  while (m > 0 && n > 0) {
    if (nums1[m - 1] >= nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    }
  }
  // 如果 n 还有，说明 nums2 还有多余的。
  while (n > 0) {
    nums1[m + n - 1] = nums2[n - 1];
    n--;
  }
};
