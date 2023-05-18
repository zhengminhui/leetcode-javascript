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
// 先拆分，再合并，类似 merge sort
var sortList = function (head) {
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head;
  let dummy = null;
  // 偶数节点：当快指针越界成为 null 时，slow 刚到中点
  // 奇数节点：快指针到最后时，slow 是中点
  // dummy 永远是slow 前一个节点
  while (fast && fast.next) {
    dummy = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  // 从 dummy 处将链表分开，
  // l 为 head-dummy, r 为 slow-fast
  dummy.next = null;
  const l = sortList(head);
  const r = sortList(slow);
  return merge(l, r);
};

function merge(l1, l2) {
  const dummy = new ListNode(0);
  let prev = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  if (l1) prev.next = l1;
  if (l2) prev.next = l2;
  return dummy.next;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
