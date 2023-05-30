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
  let arr = [];
  for (let i = 0; i < lists.length; i++) {
    let head = lists[i];
    while (head) {
      const val = head.val;
      arr.push(val);
      head = head.next;
    }
  }
  arr = arr.sort((a, b) => a - b);

  // dummy 是存在原位的刻度，刻舟求剑，cur 是移动的游标，所以要返回 dummy.next
  const dummy = new ListNode();
  let cur = dummy;
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
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
