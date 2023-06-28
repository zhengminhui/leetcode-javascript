/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 把 index push 进数组
// 只要今天的温度比 stack 顶部的温度高就 pop，
// 然后计算 index 差值，然后写到 j 天的位置
var dailyTemperatures = function (temperatures) {
  const res = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      // pop 出来的是 index
      const j = stack.pop();
      // 再把差值写回到原来 index 的位置
      res[j] = i - j;
    }
    stack.push(i);
  }

  return res;
};
