/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
// 用栈把前半段保存，过了中点开始，pop 出来，和链表的依次相加比较。
var pairSum = function (head) {
  let max = 0;
  const stack = [];

  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    stack.push(slow.val);
    slow = slow.next;
  }

  while (slow) {
    const n = stack.pop();
    max = Math.max(max, n + slow.val);
    slow = slow.next;
  }

  return max;
};
