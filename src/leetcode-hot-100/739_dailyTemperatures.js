/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const len = temperatures.length;
  const res = new Array(len).fill(0);
  const stack = [];

  for (let i = 0; i < len; i++) {
    const cur = temperatures[i];
    // 如果 stack 存在，并且今天的温度 比栈顶温度 temperatures[stack[stack.length - 1]] 高。
    while (stack.length && cur > temperatures[stack[stack.length - 1]]) {
      // j 是前一次遍历，push 进去的序号，因为当前的温度，比前一次高，所以 pop 出来，写前一次的日期差值。
      const j = stack.pop();
      // 第 j 天 需要等待 i - j 天后才迎来更高温。
      res[j] = i - j;
    }

    stack.push(i);
  }

  return res;
};

// const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
const temperatures = [30, 40, 50, 60];
// const temperatures = [30, 60, 90];
// const temperatures = [55, 38, 53, 81, 61, 93, 97, 32, 43, 78];

console.log(dailyTemperatures(temperatures));
