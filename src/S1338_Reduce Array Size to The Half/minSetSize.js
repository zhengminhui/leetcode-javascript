/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  const len = arr.length;
  const frequency = [];
  let f = 0;
  let removeLen = 0;
  let res = 0;

  arr.sort((a, b) => a - b);
  // 收集每个数字出现的频率
  for (let i = 0; i < len; i++) {
    f += 1;
    if (arr[i] !== arr[i + 1]) {
      frequency.push(f);
      f = 0;
    }
  }
  // 将频率从大到小排序
  frequency.sort((a, b) => b - a);

  while (removeLen < len / 2) {
    removeLen += frequency[res];
    res += 1;
  }
  return res;
};
