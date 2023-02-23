/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let cur = head;
  let pre = null;
  let tmp;

  while (cur) {
    tmp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tmp;
  }

  return pre;
};
