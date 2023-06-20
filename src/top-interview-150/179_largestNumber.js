/**
 * @param {number[]} nums
 * @return {string}
 */
// 一开始没找到规律，尝试用mod，每次计算mod10最大的值。
// 把nums 按字符串（字典序）排列，拼接。
// 如果排序完，第一个是0，说明后面全是0，最终返回0
var largestNumber = function (nums) {
  nums.sort((a, b) => {
    const ab = `${a}${b}`;
    const ba = `${b}${a}`;
    return ba - ab;
  });
  // console.log(nums);
  return nums[0] === 0 ? '0' : nums.join('');
};
