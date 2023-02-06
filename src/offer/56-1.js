/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 第一步很熟悉了，把数组全部异或一遍，可以得到两个不同的数字，7（1,6）。问题是怎么把 1,6 找出来？
// 接下来，把这两个数分组，1去异或所有出现两遍的数，另一组 6 去异或所有出现两遍的数。
// 那么怎么分组？
// 找一个 mask，因为 1,6 一定有位数不同，如果相同，他们的异或结果会是 0，所以，就用 1 做 mask
// 用 mask 1 去异或 7(0111),找到第一位不同的数位，7 恰巧最右就是 1,也就是不同的位（6,0110,1,0001）。
// 如果最右位不是 1，左移 1 位，继续找，直到找到。
// 找到 mask 就好办了，再遍历一遍数组，和 mask 有&的分一组，没有&的另一组，可得结果。
var singleNumbers = function (nums) {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i];
  }

  let mask = 1;

  while ((mask & res) === 0) {
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
