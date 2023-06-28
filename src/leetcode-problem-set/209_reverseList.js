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
// 四部，1234
// a，保存下一个节点2 到 temp
// b, 1 指向 pre, 这时是 null
// c, 1 改了指向后，它变成 pre
// d, 把 temp 拿出来，成为新的 cur
// 最后返回 pre
var reverseList = function (head) {
  let temp = null;
  let pre = null;
  let cur = head;

  while (cur) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }

  return pre;
};
