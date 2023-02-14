/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;
  // dummy用来记录链表的反转部分
  let dummy;
  let temp;
  // 当fast 还存存在时，快慢指针遍历，同时对慢指针走过的部分进行反转。
  while (fast && fast.next) {
    // 把 slow 保存到temp
    temp = slow;
    // 指针向后
    slow = slow.next;
    fast = fast.next.next;
    // 给temp 的牵线到dummy 节点（第一个是null）
    temp.next = dummy;
    // 保存的temp， 也就是首个slow，现在是新的 dummy
    dummy = temp;
  }
  // 如果上个循环 fast.next.next 还在链表内，说明是奇数，不清楚的可以画图，一下子豁然开朗
  // 这个时候，slow 还要在走一步，才到中点
  if (fast) {
    slow = slow.next;
  }

  // 开始遍历，进行比较
  while (slow && dummy) {
    // 不同直接返回
    if (slow.val !== dummy.val) {
      return false;
    }
    slow = slow.next;
    dummy = dummy.next;
  }
  return true;
};
