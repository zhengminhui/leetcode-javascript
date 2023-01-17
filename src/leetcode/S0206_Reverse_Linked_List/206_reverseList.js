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
 * reverse of null: null
 * reverse of one element: the element
 * reverse of an n element list: reverse of the second element followed by the first element
 */
var reverseListIteration = function (head) {
  let pre = null;
  let cur = head;
  let nxt;
  while (cur) {
    nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }
  return pre;
};

var reverseListRecursive = function (head) {
  const first = head;
  if (first === null || first.next === null) {
    return first;
  }
  const second = first.next;
  const reversedSecond = reverseListRecursive(second);
  first.next = null;
  second.next = first;
  return reversedSecond;
};
