/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 两两交换节点的进阶，记录 k，交换当前段，然后递归处理余下部分。
var reverseKGroup = function (head, k) {
  if (!head) return head;

  const a = head;
  let b = head;
  for (let i = 0; i < k; i++) {
    // 如果当前段不足 k 长度，则不翻转
    if (b === null) {
      return head;
    }
    b = b.next;
  }

  const newHead = reverseList(a, b);
  // 注意这里是 a.next, 而不是 newHead.next!
  // 因为 a 被翻转到最后了
  a.next = reverseKGroup(b, k);
  return newHead;
};

// 起始 a，不包括 b，翻转。
function reverseList(a, b) {
  let pre = null;
  let tmp = null;
  let cur = a;
  while (cur && cur !== b) {
    tmp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tmp;
  }
  return pre;
}
