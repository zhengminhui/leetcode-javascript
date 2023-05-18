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
// 要一遍扫完，就让快指针先走 n 步，当快指针到尾时，慢指针指向需要删除的 node。
// 注意要生成一个 dummy head，next 指向 head，最后要返回这个指向，才是 head 的头。
// fast，slow 一开始是指向 dummy，而不是 head，要注意。
var removeNthFromEnd = function (head, n) {
  if (!head) return null;

  const dummy = new ListNode();
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;
  let i = 0;

  while (i <= n) {
    fast = fast.next;
    i++;
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
