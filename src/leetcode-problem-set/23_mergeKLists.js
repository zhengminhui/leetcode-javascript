/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// js 没有 priorityQueue，转成 array，排序，
// 然后重新生成链表
var mergeKLists = function (lists) {
  const arr = [];
  for (let list of lists) {
    while (list) {
      const { val } = list;
      list = list.next;
      arr.push(val);
    }
  }
  arr.sort((a, b) => a - b);
  const dummy = new ListNode(0);
  let cur = dummy;
  for (const val of arr) {
    const node = new ListNode(val);
    cur.next = node;
    cur = cur.next;
  }
  return dummy.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
