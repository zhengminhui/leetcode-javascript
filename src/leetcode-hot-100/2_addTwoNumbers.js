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
var addTwoNumbers = function (l1, l2) {
  let node = new ListNode(0);
  const head = node;
  let addOne = 0;

  // 注意这里要加上 addone 的判断条件， eg： 8+ 9，剩下了进位，要在下一轮补上
  while (l1 || l2 || addOne) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const val = v1 + v2 + addOne;
    addOne = val >= 10 ? 1 : 0;
    node.next = new ListNode(val % 10);
    node = node.next;

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  return head.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
