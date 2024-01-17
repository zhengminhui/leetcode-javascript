/**
 * @param {number[]} heights
 * @return {number}
 */
// stack 常见语句，当当前比栈顶小，依次 pop 出顶部元素
// 如，当i = 2, h[2] = 1 (0 号位是哨兵), h[stack[stack.length - 1]] = h[1] = 2
// 此时的面积是 2 * (2-0-1) = 2 * 1;
// 高度 5，6继续 push，直到再次遇到 高度2，while内执行了 2 次，一次是 6* 1, 一次是 5* 2
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  const stack = [];
  // 在首尾补两个0 哨兵，方便真正的矩形入栈
  const h = [0, ...heights, 0];

  for (let i = 0; i < h.length; i++) {
    while (h[i] < h[stack[stack.length - 1]]) {
      const stackTopIndex = stack.pop();
      const area = h[stackTopIndex] * (i - stack[stack.length - 1] - 1);
      maxArea = Math.max(maxArea, area);
    }
    stack.push(i);
  }
  return maxArea;
};

const heights = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(heights));
