/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
// 前序遍历，用 stack。
// 这里卡了很久，主要还是不自信，记忆模糊了，其实想的是对的。
// 要把当前 level reverse 以后 push 进 stack，
// 这样最先 pop 出来的才是最左边那个节点。
var preorder = function (root) {
  const order = [];
  if (!root) return order;

  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    const { val, children } = node;
    order.push(val);
    stack.push(...children.reverse());
  }

  return order;
};
