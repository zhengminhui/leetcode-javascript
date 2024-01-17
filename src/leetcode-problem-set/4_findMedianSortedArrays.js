/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // 暴力法，合并，排序，取值 time O(nlogn) space O(n)
  const arr = nums1.concat(nums2).sort((a, b) => a - b);
  const len = arr.length;
  return len % 2 ? arr[(len - 1) / 2] : (arr[len / 2] + arr[len / 2 - 1]) / 2;
};
