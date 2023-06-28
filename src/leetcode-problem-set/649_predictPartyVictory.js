/**
 * @param {string} senate
 * @return {string}
 */
// 遍历 queue，如果同阵营，就 push 进 stack，否则，pop 出栈，到队列进入下一轮。最后检查 stack 里的元素。
var predictPartyVictory = function (senate) {
  const queue = senate.split('');
  const stack = [];

  while (queue.length) {
    const first = queue.shift();
    if (!stack.length || stack[stack.length - 1] === first) {
      stack.push(first);
    } else {
      queue.push(stack.pop());
    }
  }
  return stack.pop() === 'R' ? 'Radiant' : 'Dire';
};
