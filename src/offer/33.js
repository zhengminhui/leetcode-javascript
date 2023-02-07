/**
 * @param {number[]} postorder
 * @return {boolean}
 */
// 后序：左，右，中
var verifyPostorder = function (postorder) {
  if (!postorder.length) return true;
  const stack = [];
  let parent;
  // 后序遍历root节点在最后
  for (let i = postorder.length - 1; i >= 0; i--) {
    const cur = postorder[i];
    // 如果 stack 的最后大于当前，则把最后一个 pop 出来，当做新的parent
    while (stack.length && stack[stack.length - 1] > cur) {
      parent = stack.pop();
    }
    if (cur > parent) {
      return false;
    }
    stack.push(cur);
  }
  return true;
};
