/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
// 分组后变为 2sum
// time O(n^2), space O(n^2)
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const map = new Map();
  let count = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = nums1[i] + nums2[j];
      if (!map.has(sum)) {
        map.set(sum, 1);
      } else {
        map.set(sum, map.get(sum) + 1);
      }
    }
  }

  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      const sum = -(nums3[i] + nums4[j]);
      if (map.has(sum)) {
        count += map.get(sum);
      }
    }
  }
  return count;
};
