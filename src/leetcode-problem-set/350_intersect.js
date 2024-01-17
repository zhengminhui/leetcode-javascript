/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = new Map();
  const res = [];
  for (const n of nums1) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }
  for (const n of nums2) {
    if (map.has(n)) {
      res.push(n);
      const time = map.get(n) - 1;
      if (time === 0) {
        map.delete(n);
      } else {
        map.set(n, time);
      }
    }
  }
  return res;
};

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2));
