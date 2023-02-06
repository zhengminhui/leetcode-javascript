/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }

  let mask = 1;
  while ((mask & xor) === 0) {
    mask = mask << 1;
  }

  let a = 0;
  let b = 0;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (cur & mask) {
      a ^= cur;
    } else {
      b ^= cur;
    }
  }
  return [a, b];
};
