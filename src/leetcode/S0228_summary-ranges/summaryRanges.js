/**
 * @param {number[]} nums
 * @return {string[]}
 */
// [-2147483648,-2147483647,2147483647]
// 很直观的解法，遍历一次，time O(n)
// 如果后一个数和前一个连续，并且 str 里没有 ->, 就添加符号，并继续
// 如果不连续，写入前一个数，储存 str，并重新赋值 str
// 因为是从 index 1 开始比较的，所以指针要走到 length 处，不过不用担心，
// undefined 肯定和前一个不连续，也就是跳出条件。
var summaryRanges = function (nums) {
  if (!nums.length) return [];
  const res = [];
  let str = '' + nums[0];

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      if (!str.length) {
        str += nums[i];
      } else if (!str.includes('->')) {
        str = str + '->';
      }
    } else {
      if (str.includes('->')) {
        str = str + nums[i - 1];
      }
      res.push(str);
      str = '' + nums[i];
    }
  }
  return res;
};
