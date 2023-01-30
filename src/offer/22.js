/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 解法 2：双指针，一个指针先跑 k 步，然后再一起跑，
// 先跑的指针到了尾部时，后跑的指针指向倒数 k 位
const getKthFromEnd = function (head, k) {
  let pre = head;
  let lat = head;

  while (k) {
    pre = pre.next;
    k -= 1;
  }

  while (pre) {
    pre = pre.next;
    lat = lat.next;
  }
  return lat;
};

// 解法 1：计算链表长度，再从前往后遍历 length - k
// const getKthFromEnd = function (head, k) {
//   let index = getLength(head) - k;
//   let cur = head;
//   while (index > 0) {
//     index -= 1;
//     cur = cur.next;
//   }
//   return cur;
// };

// const getLength = function (head) {
//   let len = 0;
//   let cur = head;
//   while (cur) {
//     console.log(cur.val);
//     len += 1;
//     cur = cur.next;
//   }
//   return len;
// };

// const head = [3, 7, 9, 3, 5, 8, 0];
// const k = 1;
