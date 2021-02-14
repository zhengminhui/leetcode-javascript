/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = [];
  let count = 0; // 用来记录 popped 的指针
  for (let i = 0; i < pushed.length; i++) {
    // 持续入栈，直到找到第一个出栈的数字
    stack.push(pushed[i]);
    // 找到出栈的数字后，模拟出栈的动作，并向右移动指针
    while (stack.length && stack[stack.length - 1] === popped[count]) {
      stack.pop();
      count += 1;
    }
    // 如果发现 stack 最后一个和 popped 出栈的第一个不一致，继续入栈，进入下一个循环。
  }
  return stack.length === 0;
};

const pushed = [1, 2, 3, 4, 5];
const popped = [4, 5, 3, 2, 1];
// const popped = [4, 3, 5, 1, 2];
console.log(validateStackSequences(pushed, popped));
