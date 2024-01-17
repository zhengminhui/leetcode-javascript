/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const len = temperatures.length;
  const res = new Array(len).fill(0);
  const stack = [];

  for (let i = 0; i < len; i++) {
    // 只要今天的温度比 stack 里最后的温度高，就 pop，然后计算 index 差值，然后写到 j 天的位置
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const j = stack.pop();
      res[j] = i - j;
    }
    stack.push(i);
  }

  return res;
};
