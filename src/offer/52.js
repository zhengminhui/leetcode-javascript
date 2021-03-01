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
 * 方法 1： h1 遍历到尾后，指向 headB 再从头开始，h2 也是如此，所以两个指针都会跑完 headA 和 headB，所以会在交汇处重合；
 * 方法 2： 计算出各自的长度，然后让长的先跑一个 diff，则能找到交汇处。
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let h1 = headA;
  let h2 = headB;
  while (h1 !== h2) {
    h1 = h1 ? h1.next : headB;
    h2 = h2 ? h2.next : headA;
  }
  return h1;
};

var method2 = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let h1 = headA;
  let h2 = headB;

  let lenA = 0;
  let lenB = 0;

  while (h1) {
    h1 = h1.next;
    lenA += 1;
  }
  while (h2) {
    h2 = h2.next;
    lenB += 1;
  }
  h1 = headA;
  h2 = headB;

  while (lenA > lenB) {
    lenA -= 1;
    h1 = h1.next;
  }
  while (lenB > lenA) {
    lenB -= 1;
    h2 = h2.next;
  }
  while (h1 !== h2) {
    h1 = h1.next;
    h2 = h2.next;
  }
  return h1;
};
