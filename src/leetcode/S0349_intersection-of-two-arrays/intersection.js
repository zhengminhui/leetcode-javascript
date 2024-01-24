/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 因为是数字，结构简单，并且结果是唯一，所以用 set
var intersection = function (nums1, nums2) {
  const res = [];
  const s = new Set();
  for (let i = 0; i < nums1.length; i++) {
    const cur = nums1[i];
    if (!s.has(cur)) {
      s.add(cur);
    }
  }
  nums2.forEach((i) => {
    if (s.has(i) && !res.includes(i)) {
      res.push(i);
    }
  });
  return res;
};
