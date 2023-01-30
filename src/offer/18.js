/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const deleteNode = function (head, val) {
  // 如果第一个就是目标
  if (head.val === val) {
    return head.next;
  }
  let pre = head;
  let cur = head.next;

  while (cur && cur.val !== val) {
    pre = cur;
    cur = cur.next;
  }
  if (cur.val === val) {
    pre.next = cur.next;
  }
  // 注意返回 head，这个指针还在头部，pre 已跑到后面去了。
  return head;
};
