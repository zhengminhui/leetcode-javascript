/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return null;
  const dummy = new ListNode(0, head);
  let fast = dummy;
  let slow = dummy;
  let i = 0;
  while (i <= n) {
    fast = fast.next;
    i += 1;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;

  return dummy.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
