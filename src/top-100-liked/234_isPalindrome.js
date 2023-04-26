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
// 快慢指针 time O(n) space O(1)
// 快指针向前，一次两步，慢指针一步，并翻转前半部分
// 快指针到头时，慢指针刚好在中间
// 再比较 慢指针，和反转链表的值
var isPalindrome = function (head) {
  if (!head) return true;

  let fast = head;
  let slow = head;
  let pre = null;
  let temp = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    // 翻转链表模板代码
    temp = slow.next;
    slow.next = pre;
    pre = slow;
    slow = temp;
  }
  // 如果 fast 不是 null，说明fast 是最后一个节点，
  // 说明链表奇数长度，这时 slow 是正中间那个，
  // 就需要 slow 再走一步，才能到右半段（1，2，3，2，1）
  if (fast) {
    slow = slow.next;
  }
  // 开始比较后半段，和反转之后的前半段
  while (slow && pre) {
    if (slow.val !== pre.val) {
      return false;
    }
    slow = slow.next;
    pre = pre.next;
  }
  return true;
};
