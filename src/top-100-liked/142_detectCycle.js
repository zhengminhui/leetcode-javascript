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
//  这里的图很好：https://leetcode.cn/problems/linked-list-cycle-ii/solutions/441306/142-huan-xing-lian-biao-ii-jian-hua-gong-shi-jia-2/
var detectCycle = function (head) {
  if (!head || !head.next) return null;

  let fast = head;
  let slow = head;

  // 如果fast 成为null 了，说明没有环。
  // 如果存在环，fast 会先进入环，他们一定会在环内相遇。
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    // 找到快慢指针第一次碰面的地方。
    if (fast === slow) {
      // 让 fast 指针回到head，重新跑。
      // 两个指针一次一步，相遇的地方就是环的入口
      fast = head;

      while (slow !== fast) {
        fast = fast.next;
        slow = slow.next;
      }
      return fast;
    }
  }
  return null;
};
