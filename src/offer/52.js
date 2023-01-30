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
 * 2023.1.30 方法 1 的 note：因为链表不存在环，把两个链表 a +b , 和 b + a 并列写出来就明白了了
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
var getIntersectionNode2 = function (headA, headB) {
  if (!headA || !headB) return null;

  let lenA = 0;
  let lenB = 0;
  let ha = headA;
  let hb = headB;

  // 计算长度
  while (ha) {
    ha = ha.next;
    lenA += 1;
  }
  while (hb) {
    hb = hb.next;
    lenB += 1;
  }

  // 回到头部
  ha = headA;
  hb = headB;

  // 跑完差距
  while (lenA > lenB) {
    ha = ha.next;
    lenA -= 1;
  }
  while (lenB > lenA) {
    hb = hb.next;
    lenB -= 1;
  }

  // 开始比较后半段
  while (ha !== hb) {
    ha = ha.next;
    hb = hb.next;
  }

  // 如果有，就是 ha，如果没有就是 null
  return ha;
};
