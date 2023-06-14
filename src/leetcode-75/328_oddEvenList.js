/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 奇偶两个指针，space O（n）
// 偶指针跑的更快，当偶指针存在时，
// 两者交替向后。
// 然后更新 odd， even 变量指向
// 最后把偶指针头，接到奇指针后。
var oddEvenList = function (head) {
  if (!head) return head;

  let odd = head;
  let even = head.next;
  // 保存最初的 even 指针，最后接在后半段
  const evenHead = even;

  // 因为 even 后走（走的更远），所以以 even 来判断跳出条件。
  while (even && even.next) {
    // 先修改指向，再移动变量，方便 even 去接。
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;

  return head;
};
