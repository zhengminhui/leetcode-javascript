/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 和 remove duplicate 对照做。
// 那道题简单一点，不需要 dummy head，因为可以保留第一个元素。
var removeElements = function (head, val) {
  const pre = new ListNode(null);
  pre.next = head;
  let node = pre;
  while (node && node.next) {
    if (node.next.val === val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return pre.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
