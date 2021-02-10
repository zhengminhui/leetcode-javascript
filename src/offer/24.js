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
 */
const reverseList = function (head) {
  let pre = null;
  let cur = head;
  let nxt;
  while (cur) {
    // 保存 next 指针
    nxt = cur.next;
    // 将 cur 的next 指针指向 pre，完成断开& 反转
    cur.next = pre;
    // 这一段反转完了，指针向后移动，cur 变成 pre，cur.next 变成 cur
    pre = cur;
    cur = nxt;
  }
  return pre;
};

const recursive = function (head) {
  let first = head;
  if (!first || !first.next) {
    return first;
  }
  let second = first.next;
  let reverseSecond = recursive(second);
  first.next = null;
  second.next = first;
  return reverseSecond;
};
