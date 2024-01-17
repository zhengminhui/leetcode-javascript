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
// 递归做法，对前两个的指向进行操作，然后递归操作剩下的。返回新的头。
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  const first = head;
  const second = head.next;
  const remain = head.next.next;

  second.next = first;
  first.next = swapPairs(remain);
  return second;
};
