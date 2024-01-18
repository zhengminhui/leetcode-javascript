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
// [1,1,1] => [1]
var deleteDuplicates = function (head) {
  let node = head;
  while (node && node.next) {
    // 一定要注意这里的 else，如果值相等，只是先改变 node 的 next 联接，但是 node 指针还暂时不往后走
    // 没有 else 包裹会导致 [1,1,1] 不通过。
    if (node.val === node.next.val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return head;
};
