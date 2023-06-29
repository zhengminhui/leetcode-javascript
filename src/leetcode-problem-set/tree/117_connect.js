/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// 想按 116 的递归来写，没解决跨位联接的问题，
// 更优的方法，不用重复入队出队，把每一层级看成一个链表。一次遍历，常数空间。
// 两个指针，一个是 cur，用来遍历树，一个 dummy，用来穿针引线
var connect = function (root) {
  if (!root) return null;
  let cur = root;

  // cur 可以看做每一层的链表
  while (cur) {
    // 每一层建立一个 dummy 节点，串起该层
    const dummy = new Node();
    let pre = dummy;
    // 开始遍历这一层
    while (cur) {
      // 如果有左右节点，就让 pre 穿过这两个节点
      if (cur.left) {
        pre.next = cur.left;
        pre = pre.next;
      }
      if (cur.right) {
        pre.next = cur.right;
        pre = pre.next;
      }
      // 访问该层的下一节点
      cur = cur.next;
    }
    // 这一层遍历完，继续往下走，直到 cur 为空时为止。
    // 这里要解释下，为什么 cur = dummy.next 能到下一行。
    // 用题图解释，cur 是第一行的节点 1，dummy 和 pre 是第二行的头，也就是 2, 3 的左边。
    // 当对 cur 1 遍历时，是使用 pre 去穿过 2,3。
    // 当 cur 遍历完了，cur 赋值为 dummy.next，也就是第二行的第一个，也就是 2 了，至此，完成了向下一行的变化。
    cur = dummy.next;
  }
  return root;
};

// 尝试用层序遍历的方式来做
var connectBFS = function (root) {
  if (!root) return null;
  const queue = [root];

  while (queue.length) {
    let len = queue.length;

    // 创建一个 pre 节点
    let pre = new Node(null);
    while (len) {
      const node = queue.shift();
      // 如果 pre 是 null，说明是头节点。如果不是，说明可以连接当前节点。
      if (pre !== null) {
        pre.next = node;
      }
      pre = node;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      len--;
    }
  }
  return root;
};

function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}
