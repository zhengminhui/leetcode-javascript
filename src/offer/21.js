/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  function isOdd(num) {
    return num % 2;
  }

  let i = 0;
  let len = nums.length;
  while (i < len) {
    const cur = nums[i];

    if (isOdd(cur)) {
      // 是奇数，则指针继续往后
      i++;
    } else {
      // 是偶数, 将数字插入最后，保持当前 index，并减少遍历的长度
      nums.splice(i, 1);
      nums.push(cur);
      len--;
    }
  }
  return nums;
};
