/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
// 模拟入栈，直到找到第一个出栈的数字
// 找到出栈的数字后，模拟出栈的动作，并向右移动指针
// 如果发现 stack 最后一个和 popped 出栈的第一个不一致，继续入栈，进入下一个循环。
// 最后判断 stack 是否为空，空表示模拟圆满完成。
var validateStackSequences = function (pushed, popped) {
  const stack = [];
  let pointer = 0;

  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);

    while (stack.length && stack[stack.length - 1] === popped[pointer]) {
      stack.pop();
      pointer += 1;
    }
  }

  return stack.length === 0;
};

const pushed = [1, 2, 3, 4, 5];
const popped = [4, 5, 3, 2, 1];
// const popped = [4, 3, 5, 1, 2];
console.log(validateStackSequences(pushed, popped));
