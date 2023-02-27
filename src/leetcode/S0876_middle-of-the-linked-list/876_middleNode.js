/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  if (!head || !head.next) return head;

  let len = 0;
  let cur = head;
  while (cur) {
    cur = cur.next;
    len += 1;
  }
  let mid = len % 2 ? Math.floor(len / 2) : len / 2;
  while (mid) {
    mid -= 1;
    head = head.next;
  }

  return head;
};
