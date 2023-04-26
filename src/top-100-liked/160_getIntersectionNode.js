/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 可以计算长度，走过差值，找到相交点。
// 更简单的方法是，对 a 来说，a 走完，接着走 b，
// b 也一样，如果交点存在，就会遇到，
// a 1234，b 34
// 两指针分别走过 123434， 341234.
// 当两链表走完时，一定会面临 null，不会出现相互引用的情况。
var getIntersectionNode = function (headA, headB) {
  let ha = headA;
  let hb = headB;
  if (!ha || !hb) return null;
  while (ha !== hb) {
    ha = ha === null ? headB : ha.next;
    hb = hb === null ? headA : hb.next;
  }
  return ha;
};
