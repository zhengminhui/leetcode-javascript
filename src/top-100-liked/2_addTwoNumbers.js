/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// note0518:注意把新的 node append 到 head 后，head 要向后走一步。
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode();
  const dummy = head;
  let addOne = 0;

  // 注意这里要加上 addone 的判断条件， eg： 8+ 9，剩下了进位，要在下一轮补上
  while (l1 || l2 || addOne) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const val = v1 + v2 + addOne;
    addOne = val >= 10 ? 1 : 0;
    const node = new ListNode(val % 10);
    head.next = node;
    head = head.next;

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  return dummy.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
